var Voting = artifacts.require("./Voting.sol");

contract("Voting", accounts => {
    it("Chairman should be creator", () => {
        let creator = accounts[0];
        Voting.deployed().then(contract => {
            return contract.chairman.call();
        }).then(result => {
            assert.equal(creator,result,'Chairman is not creator');
        });
    });

    it("Check First Proposals", () => {
        let proposal1 = "John";

        Voting.deployed().then(contract => {
            return contract.proposals.call(0);
        }).then(result => {
            let [name, voteCount] = result;
            assert.equal(proposal1,web3.toUtf8(name));
        });
    });

    it("Check Grant Voter", ()=>{
        Voting.deployed().then(contract => {
            contract.grantRightToVote(accounts[1]);
            return contract;
        }).then((contract)=>{
            return contract.voters.call(accounts[1]);
        }).then(result => {
            let [weight, voted, delegateTo, votedProposal] = result;
            assert.equal(1, weight);
        });
    });

});