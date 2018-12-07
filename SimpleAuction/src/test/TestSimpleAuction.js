const Web3 = require('web3');
const ganache = require("ganache-cli");
const web3 = new Web3(ganache.provider());
const {abi, bytecode} = require("../compile")
import { assert } from "chai"
import { builtinModules } from 'module';

let accounts;
let simpleAuction;
beforeEach( async ()=>{
    accounts = await web3.eth.getAccounts();    
    simpleAuction = await new web3.eth.Contract(JSON.parse(abi))
        .deploy({data: bytecode, arguments:[10, accounts[1]]})
        .send({from: accounts[0],gas:1000000});
})

describe("Test SimpleAuction", function(){
    let sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    it("Test Deployed", ()=>{
        //console.log(simpleAuction);
        assert.ok(simpleAuction.options.address);
    });

    it("Test Contract init state", async () => {
        const initBeneficiary = await simpleAuction.methods.beneficiary().call();
        assert.strictEqual(initBeneficiary, accounts[1], "Init Beneficiary is not correct");
    });

    it("Test First Bid", async () => {
        // Check Events
        let eventEmitted = false;
        let eventBidder;
        let eventPrice;

        simpleAuction.events.HighestBidIncreased()
            .on('data', event => {
                eventEmitted = true;
                eventBidder = event.returnValues.bidder;
                eventPrice = event.returnValues.bidPrice;
            })
            .on('changed', () => assert.fail("Event Changed"))
            .on('error', error => assert.fail(error));

        let result = await simpleAuction.methods.bid().send({from:accounts[2], value:100});
        assert.isOk(result, "Bid Failed");

        let bidder = await simpleAuction.methods.highestBidder().call();
        assert.strictEqual(bidder, accounts[2], "Bidder is not correct");

        let price = await simpleAuction.methods.highestBidPrice().call();
        assert.strictEqual(price, '100', "Bid price is not correct");

        assert.isOk(eventEmitted, "No event received");
        assert.strictEqual(eventBidder, accounts[2], "Event Bidder is not correct");
        assert.strictEqual(eventPrice, '100', "Event Bid price is not correct");
    });

    it("Test 2nd Bid Failed", async () => {
        let execptionReceived = false;
        let result = await simpleAuction.methods.bid().send({from:accounts[2], value:100});
        assert.isOk(result, "Bid Failed");
        try{
            result = await simpleAuction.methods.bid().send({from:accounts[2], value:10});
            assert.fail(result, "Bid Should Failed");
        }catch(e){
            assert.strictEqual("revert",e.results[e.hashes[0]].error, "Error not correct");
            assert.strictEqual("Your price is not the highest",e.results[e.hashes[0]].reason, "Error message not correct");
        }
    });

    it("Test Auction End", async function () {
        //Set Mocha Test Case Time out, default is 20000ms
        this.timeout(50000);
        let lowerBid = 100;
        let higherBid = 200;
        let beforeAmount = await web3.eth.getBalance(accounts[1]);
        console.log(`before auction, beneficiary's balance is ${beforeAmount}`);

        let result = await simpleAuction.methods.bid().send({from:accounts[2], value:lowerBid});
        assert.isOk(result, "Bid Failed");

        result = await simpleAuction.methods.bid().send({from:accounts[3], value:higherBid});
        assert.isOk(result, "Bid Failed");

        await sleep(15000);
        
        result = await simpleAuction.methods.auctionEnd().send({from:accounts[0]});
        assert.isOk(result, "End Auction Failed");
            
        let afterAmount =  await web3.eth.getBalance(accounts[1]);
        console.log(`after auction, beneficiary's balance is ${afterAmount}`);

        let balanceChanged = web3.utils.toBN(afterAmount).sub(web3.utils.toBN(beforeAmount)).toNumber();
        assert.equal(higherBid, balanceChanged,"Bid amount is not transferred");
        
    });

    it("Test Withdraw", async function(){
        this.timeout(50000);

        let lowerBid = web3.utils.toWei('1', 'Mwei');
        let higherBid = web3.utils.toWei('2', 'Mwei');

        console.log(`Current Gas Price is ${await web3.eth.getGasPrice()}`);
        
        console.log(`When deployed, the Contract's balance is \
            ${await  web3.eth.getBalance(simpleAuction.options.address)}`);
        console.log(`Before auction, the beneficiary's banlance is \
            ${await  web3.eth.getBalance(accounts[1])}`);

        let beforeBid1 = await web3.eth.getBalance(accounts[2]);
        console.log(`Before bid, the 1st bidder's banlance is ${beforeBid1}`);

        let result = await simpleAuction.methods.bid().send({from:accounts[2], value:lowerBid});
        assert.isOk(result, "Bid Failed");

        let afterBid1 = await web3.eth.getBalance(accounts[2]);
        console.log(`after bid ${lowerBid}, the 1st bidder's banlance is ${afterBid1}`);

        let balanceChanged1 = web3.utils.toBN(beforeBid1).sub(web3.utils.toBN(afterBid1)).toNumber();
        console.log(`after bid, 1st bidder used ${balanceChanged1}`);

        console.log(`Before bid, the 2nd bidder's banlance is \
            ${await web3.eth.getBalance(accounts[3])}`);
        result = await simpleAuction.methods.bid().send({from:accounts[3], value:higherBid});
        assert.isOk(result, "Bid Failed");
        console.log(`after bid ${higherBid}, the 2nd bidder's banlance is \
            ${await web3.eth.getBalance(accounts[3])}`);

        await sleep(15000);

        result = await simpleAuction.methods.auctionEnd().send({from:accounts[0]});
        assert.isOk(result, "End Auction Failed");

        console.log(`After auction, the contract's banlance is \
            ${await  web3.eth.getBalance(simpleAuction.options.address)}`);

        console.log(`After auction, the beneficiary's banlance is \
            ${await web3.eth.getBalance(accounts[1])}`);
        
        result = await simpleAuction.methods.toRefund(accounts[2]).call();
        assert.equal(result, lowerBid, "Refund amount is not correct")

        result = await simpleAuction.methods.withdraw().send({from:accounts[2]});
        assert.isOk(result, "Withdraw failed");
        
        let afterWithdraw1 = await web3.eth.getBalance(accounts[2]);
        console.log(`after withdraw, the 1st bidder's banlance is ${afterWithdraw1}`);

        balanceChanged1 = web3.utils.toBN(beforeBid1).sub(web3.utils.toBN(afterWithdraw1)).toNumber();
        console.log(`after wihtdraw, 1st bidder totally used ${balanceChanged1}`);

        console.log(`After auction, the contract's banlance is \
            ${await  web3.eth.getBalance(simpleAuction.options.address)}`);
    })
});