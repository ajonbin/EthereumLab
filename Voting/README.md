# Voting #

## Compile ##

~~~ shell
$ truffle develop
Truffle Develop started at http://127.0.0.1:9545/
~~~

~~~ js
Accounts:
(0) 0x627306090abab3a6e1400e9345bc60c78a8bef57
(1) 0xf17f52151ebef6c7334fad080c5704d77216b732
(2) 0xc5fdf4076b8f3a5357c5e395ab970b5b54098fef
(3) 0x821aea9a577a9b44299b9c15c88cf3087f3b5544
(4) 0x0d1d4e623d10f9fba5db95830f7d3839406c6af2
(5) 0x2932b7a2355d6fecc4b5c0b6bd44cc31df247a2e
(6) 0x2191ef87e392377ec08e7c08eb105ef5448eced5
(7) 0x0f4f2ac550a1b4e2280d04c21cea7ebd822934b5
(8) 0x6330a553fc93768f612722bb8c2ec78ac90b3bbc
(9) 0x5aeda56215b167893e80b4fe645ba6d5bab767de

Private Keys:
(0) c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3
(1) ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f
(2) 0dbbe8e4ae425a6d2687f1a7e3ba17bc98c673636790f1b8ad91193c05875ef1
(3) c88b703fb08cbea894b6aeff5a544fb92e78a18e19814cd85da83b71f772aa6c
(4) 388c684f0ba1ef5017716adb5d21a053ea8e90277d0868337519f97bede61418
(5) 659cbb0e2411a44db63778987b1e22153c086a95eb6b18bdf89de078917abc63
(6) 82d052c865f5763aad42add438569276c00d3d88a2d062d36b2bae914d58b8c8
(7) aa3680d5d48a8283413f7a108367c7299ca73f553735860a87b08f39395618b7
(8) 0f62d96d6675f32685bbdb8ac13cda7c23436f63efbb9d07700d8669ff12b7c4
(9) 8d5366123cb560bb606379f90a0bfd4769eecc0557f1b362dcae9012b548b1e5

Mnemonic: candy maple cake sugar pudding cream honey rich smooth crumble sweet treat

⚠️  Important ⚠️  : This mnemonic was created for you by Truffle. It is not secure.
Ensure you do not use it on production blockchains, or else you risk losing funds.
~~~

~~~ javascript
truffle(develop)> compile
~~~

~~~ javascript
Compiling ./contracts/Migrations.sol...
Compiling ./contracts/Voting.sol...
Writing artifacts to ./build/contracts
~~~

~~~ js
truffle(develop)> migrate
Using network 'develop'.

Running migration: 1_initial_migration.js
  Deploying Migrations...
  ... 0xe45ac44a98f1aef10e04e4080cf76259b411f037e627a3e72b696a9d6bc69a88
  Migrations: 0x8cdaf0cd259887258bc13a92c0a6da92698644c0
Saving successful migration to network...
  ... 0xd7bc86d31bee32fa3988f1c1eabce403a1b5d570340a3a9cdba53a472ee8c956
Saving artifacts...
Running migration: 2_deploy_contract.js
  Deploying Voting...
  ... 0x754205fb8cb26095d77bacc3054b47b240135e5a163b5b0efe83131784fc2332
  Voting: 0x345ca3e014aaf5dca488057592ee47305d9b3e10
Saving successful migration to network...
  ... 0xf36163615f41ef7ed8f4a8f192149a0bf633fe1a2398ce001bf44c43dc7bdda0
Saving artifacts...
~~~

## Parameters to Contract ##

Contract Voting takes byte32[] as parameters, so when deploy contract, you must pass them in.

You can input string

~~~ shell
$cat migrations/2_deploy_contract.js
~~~

~~~ javascript
var Voting = artifacts.require("./Voting.sol");

module.exports = function(deployer) {
  deployer.deploy(Voting, ["John", "Mike", "Alice");
};]
~~~

Or use byte32 directly:

~~~ shell
$cat migrations/2_deploy_contract.js
~~~

~~~ javascript
var Voting = artifacts.require("./Voting.sol");

module.exports = function(deployer) {
  deployer.deploy(Voting, [web3.fromAscii("John"),web3.fromAscii("Mike"),web3.fromAscii("Alice")]);
};
~~~

## Print Init Values ##

~~~ js
truffle(develop)> Voting.address
'0x345ca3e014aaf5dca488057592ee47305d9b3e10'
truffle(develop)> Voting.at(Voting.address).chairman.call();
'0x627306090abab3a6e1400e9345bc60c78a8bef57'
truffle(develop)> Voting.at(Voting.address).voters.call();
Error: Invalid number of arguments to Solidity function
    at /usr/local/lib/node_modules/truffle/build/webpack:/packages/truffle-contract/contract.js:126:1
    at new Promise (<anonymous>)
    at /usr/local/lib/node_modules/truffle/build/webpack:/packages/truffle-contract/contract.js:135:1
    at SolidityFunction.call (/usr/local/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/function.js:131:1)
    at SolidityFunction.toPayload (/usr/local/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/function.js:90:1)
    at SolidityFunction.validateArgs (/usr/local/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/function.js:74:1)
    at Object.InvalidNumberOfSolidityArgs (/usr/local/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/errors.js:25:1)
truffle(develop)> Voting.at(Voting.address).proposals.call(0);
[ '0x4a6f686e00000000000000000000000000000000000000000000000000000000',
  BigNumber { s: 1, e: 0, c: [ 0 ] } ]
truffle(develop)> Voting.at(Voting.address).proposals.call(1);
[ '0x4d696b6500000000000000000000000000000000000000000000000000000000',
  BigNumber { s: 1, e: 0, c: [ 0 ] } ]
truffle(develop)> Voting.at(Voting.address).proposals.call(2);
[ '0x416c696365000000000000000000000000000000000000000000000000000000',
  BigNumber { s: 1, e: 0, c: [ 0 ] } ]
truffle(develop)> Voting.at(Voting.address).proposals.call(3);
Error: VM Exception while processing transaction: invalid opcode
    at XMLHttpRequest._onHttpResponseEnd (/usr/local/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:509:1)
    at XMLHttpRequest._setReadyState (/usr/local/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:354:1)
    at XMLHttpRequestEventTarget.dispatchEvent (/usr/local/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:64:1)
    at XMLHttpRequest.request.onreadystatechange (/usr/local/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/httpprovider.js:128:1)
    at /usr/local/lib/node_modules/truffle/build/webpack:/packages/truffle-provider/wrapper.js:134:1
    at /usr/local/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/requestmanager.js:86:1
    at Object.InvalidResponse (/usr/local/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/errors.js:38:1)
~~~

## Add Voter ##

## Add Voter 1 ###

~~~ js
truffle(develop)> Voting.deployed().then(contract=>contract.grantRightToVote(web3.eth.accounts[1])).then(v=>console.log(v));
{ tx: '0x03911ba65406bae34ae1ce6708d3789cc323d71a816f7b76e70ced2c967a223b',
  receipt:
   { transactionHash: '0x03911ba65406bae34ae1ce6708d3789cc323d71a816f7b76e70ced2c967a223b',
     transactionIndex: 0,
     blockHash: '0x4e18e1f67c1d07ba3f82d26b094405ec28950bc1841784b6fca623949f49b183',
     blockNumber: 6,
     gasUsed: 44027,
     cumulativeGasUsed: 44027,
     contractAddress: null,
     logs: [],
     status: '0x01',
     logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000' },
  logs: [] }
~~~

## Add Voter 1 Again ##

~~~ js
truffle(develop)> Voting.deployed().then(contract=>contract.grantRightToVote(web3.eth.accounts[1])).then(v=>console.log(v));
Error: VM Exception while processing transaction: revert
    at XMLHttpRequest._onHttpResponseEnd (/usr/local/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:509:1)
    at XMLHttpRequest._setReadyState (/usr/local/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:354:1)
    at XMLHttpRequestEventTarget.dispatchEvent (/usr/local/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:64:1)
    at XMLHttpRequest.request.onreadystatechange (/usr/local/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/httpprovider.js:128:1)
    at /usr/local/lib/node_modules/truffle/build/webpack:/packages/truffle-provider/wrapper.js:134:1
    at /usr/local/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/requestmanager.js:86:1
    at Object.InvalidResponse (/usr/local/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/errors.js:38:1)
~~~

### Add Voter 2 ###

~~~ js
truffle(develop)> Voting.deployed().then(contract=>contract.grantRightToVote(web3.eth.accounts[2])).then(v=>console.log(v));
{ tx: '0x462ea3dc88fa146618104e49c9c8faa0283ac6069b0d0dce7cf2ab1f0abe07cf',
  receipt: 
   { transactionHash: '0x462ea3dc88fa146618104e49c9c8faa0283ac6069b0d0dce7cf2ab1f0abe07cf',
     transactionIndex: 0,
     blockHash: '0x16514a35437fc82f77a186847bddd1e60b299991760fba3b10be3854bacc8744',
     blockNumber: 12,
     gasUsed: 44027,
     cumulativeGasUsed: 44027,
     contractAddress: null,
     logs: [],
     status: '0x01',
     logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000' },
  logs: [] }

~~~

## Check Voters ##

~~~ js
truffle(develop)> Voting.deployed().then(contract=>contract.voters.call(web3.eth.accounts[1]));
[ BigNumber { s: 1, e: 0, c: [ 1 ] },
  false,
  '0x0000000000000000000000000000000000000000',
  BigNumber { s: 1, e: 0, c: [ 0 ] } ]
truffle(develop)> Voting.deployed().then(contract=>contract.voters.call(web3.eth.accounts[1])).then(value=>value[0]);
BigNumber { s: 1, e: 0, c: [ 1 ] }
truffle(develop)> Voting.deployed().then(contract=>contract.voters.call(web3.eth.accounts[1])).then(value=>value[0].toNumber());
1
~~~

## Delegate To ##

* Account 1 Deletegate to Account2

~~~ js
truffle(develop)> Voting.deployed().then(contract=>contract.delegateRightTo(web3.eth.accounts[1],{from:web3.eth.accounts[2]})).then(result=>console.log(result));
{ tx: '0x577787e1aec31022cba9104740ca96a67575d68d17a7ffdf61356d2e7edde25b',
  receipt:
   { transactionHash: '0x577787e1aec31022cba9104740ca96a67575d68d17a7ffdf61356d2e7edde25b',
     transactionIndex: 0,
     blockHash: '0x90a09f8f31df609e9e811cc33280da7e11b55397a641a46a69677cd7ea25a265',
     blockNumber: 14,
     gasUsed: 55271,
     cumulativeGasUsed: 55271,
     contractAddress: null,
     logs: [],
     status: '0x01',
     logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000' },
  logs: [] }
undefined
~~~

* Check Account 2
  * delegateTo is Account 1's address
  * voted is true

~~~ js
truffle(develop)> Voting.deployed().then(contract=>contract.voters.call(web3.eth.accounts[2])).then(v=>console.log(v));
[ BigNumber { s: 1, e: 0, c: [ 1 ] },
  true,
  '0xf17f52151ebef6c7334fad080c5704d77216b732',
  BigNumber { s: 1, e: 0, c: [ 0 ] } ]
undefined
~~~

* Check Account 1
  * weight is 2

~~~ js
truffle(develop)> Voting.deployed().then(contract=>contract.voters.call(web3.eth.accounts[1])).then(v=>console.log(v));
[ BigNumber { s: 1, e: 0, c: [ 2 ] },
  false,
  '0x0000000000000000000000000000000000000000',
  BigNumber { s: 1, e: 0, c: [ 0 ] } ]
undefined
truffle(develop)> Voting.deployed().then(contract=>contract.voters.call(web3.eth.accounts[1])).then(v=>console.log(v[0]));
BigNumber { s: 1, e: 0, c: [ 2 ] }
undefined
truffle(develop)> Voting.deployed().then(contract=>contract.voters.call(web3.eth.accounts[1])).then(v=>console.log(v[0].toNumber()));
2
~~~

## Vote ##

~~~ js
truffle(develop)> Voting.deployed().then(contract=>contract.vote(1));
{ tx: '0x76342742219ad126006a5e50e5d3a5c10ea5ab8d692db6589028c4a67da1b1c1',
  receipt: 
   { transactionHash: '0x76342742219ad126006a5e50e5d3a5c10ea5ab8d692db6589028c4a67da1b1c1',
     transactionIndex: 0,
     blockHash: '0x4ae55e3ea474a96ef8143fbb2e95d4f3a19b97fa4b86debfeea3f7884e5d3fbb',
     blockNumber: 15,
     gasUsed: 83313,
     cumulativeGasUsed: 83313,
     contractAddress: null,
     logs: [],
     status: '0x01',
     logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000' },
  logs: [] }
truffle(develop)> Voting.deployed().then(contract=>contract.voters.call(web3.eth.accounts[0]));
[ BigNumber { s: 1, e: 0, c: [ 1 ] },
  true,
  '0x0000000000000000000000000000000000000000',
  BigNumber { s: 1, e: 0, c: [ 1 ] } ]
truffle(develop)> Voting.deployed().then(contract=>contract.vote(1, {from:web3.eth.accounts[1]}))
{ tx: '0x158808acacdb293191d13bcb16aa973eca33c6b6370fa17ae8da8b93a1720f73',
  receipt: 
   { transactionHash: '0x158808acacdb293191d13bcb16aa973eca33c6b6370fa17ae8da8b93a1720f73',
     transactionIndex: 0,
     blockHash: '0x8dc69fe7500dca31ab49d9a6dc0b3f59738a5ba565c78eafe2439e0ebd846ec7',
     blockNumber: 16,
     gasUsed: 68313,
     cumulativeGasUsed: 68313,
     contractAddress: null,
     logs: [],
     status: '0x01',
     logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000' },
  logs: [] }
~~~

## Winner ##

~~~ js
truffle(develop)> Voting.deployed().then(contract=>contract.winnerName.call()).then(v=>console.log(v));
0x4d696b6500000000000000000000000000000000000000000000000000000000
undefined
truffle(develop)> Voting.deployed().then(contract=>contract.winnerName.call()).then(v=>console.log
evalmachine.<anonymous>:1
truffle(develop)> Voting.deployed().then(contract=>contract.winnerName.call()).then(v=>console.log(web3.toUtf8(v)));
Mike
undefined
~~~

## Voting With Eveent ##

Add Voting Contract with Event

* VotingWithEvent.sol
* 3_deploy_contract.js

### Compile and Deploy ###

~~~ js
truffle(develop)> compile
~~~

~~~js
Compiling ./contracts/VotingWithEvent.sol...
Writing artifacts to ./build/contracts
~~~

~~~js
truffle(develop)> migrate
~~~

~~~js
Using network 'develop'.

Running migration: 3_deploy_contract.js
  Deploying VotingWithEvent...
  ... 0x5c0415094a2f5d2c1ccabb7e5d95c3765c8f7600878bbc28dda1e5f93e144298
  VotingWithEvent: 0xeec918d74c746167564401103096d45bbd494b74
Saving successful migration to network...
  ... 0xfff45ce040c034073ac3a3531c1b05d9e9a13a4d4e20f51b6fabff65a7c20f20
Saving artifacts...
~~~

### Grant Voter ###

~~~js
truffle(develop)> VotingWithEvent.deployed().then(contract=>contract.grantRightToVote(web3.eth.accounts[1]));
{ tx: '0x12745706290f3112dc8e722623e8a4f50c077fc6652dd1f8ba80b3a3faf8beb2',
  receipt: 
   { transactionHash: '0x12745706290f3112dc8e722623e8a4f50c077fc6652dd1f8ba80b3a3faf8beb2',
     transactionIndex: 0,
     blockHash: '0xf8a860f933eada4e26e33eb5eaa4640d89074aff85e82b27ded8b9f0732ec2c6',
     blockNumber: 19,
     gasUsed: 45106,
     cumulativeGasUsed: 45106,
     contractAddress: null,
     logs: [ [Object] ],
     status: '0x01',
     logsBloom: '0x00000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010080000000000000000000000000000000000000000000000000000000000000000000000' },
  logs: 
   [ { logIndex: 0,
       transactionIndex: 0,
       transactionHash: '0x12745706290f3112dc8e722623e8a4f50c077fc6652dd1f8ba80b3a3faf8beb2',
       blockHash: '0xf8a860f933eada4e26e33eb5eaa4640d89074aff85e82b27ded8b9f0732ec2c6',
       blockNumber: 19,
       address: '0xeec918d74c746167564401103096d45bbd494b74',
       type: 'mined',
       event: 'eventGrantVoter',
       args: [Object] } ] }

truffle(develop)> VotingWithEvent.deployed().then(contract=>contract.grantRightToVote(web3.eth.accounts[2])).then(r=>r.logs.forEach(log=>console.log(log.args)));
{ voter: '0xc5fdf4076b8f3a5357c5e395ab970b5b54098fef' }
~~~

### Delegate ###

~~~js
truffle(develop)> VotingWithEvent.deployed().then(contract=>contract.delegateRightTo(web3.eth.accounts[1],{from:web3.eth.accounts[2]})).then(r=>r.logs.forEach(log=>console.log(log.args)));
{ from: '0xc5fdf4076b8f3a5357c5e395ab970b5b54098fef',
  to: '0xf17f52151ebef6c7334fad080c5704d77216b732' }
~~~

### Vote ###

~~~js
truffle(develop)> VotingWithEvent.deployed().then(contract=>contract.vote(1, {from:web3.eth.accounts[1]})).then(r=>r.logs.forEach(log=>console.log(log.args)));
{ voter: '0xf17f52151ebef6c7334fad080c5704d77216b732',
  proposal: BigNumber { s: 1, e: 0, c: [ 1 ] },
  count: BigNumber { s: 1, e: 0, c: [ 2 ] } }
~~~

## Testing with solidity ##

* Add TestVoting.sol in test/
* The file name must be prefix with "Test"
* Test case name must be prefix with "test"
* Test Hooks:
  * beforeAll
  * afterAll
  * beforeEach
  * afterEach

~~~js
truffle(develop)> test
Using network 'develop'.

Compiling ./contracts/Voting.sol...
Compiling ./test/TestVoting.sol...
Compiling truffle/Assert.sol...
Compiling truffle/DeployedAddresses.sol...


  TestVoting
    ✓ testChairman (66ms)
    ✓ testProposals (108ms)
    ✓ testGrantVoter (70ms)


  3 passing (828ms)
~~~

## Testing with JS ##

Base on Mocha test framework

~~~js
truffle(develop)> test
Using network 'develop'.

Compiling ./contracts/Voting.sol...
Compiling ./test/TestVoting.sol...
Compiling truffle/Assert.sol...
Compiling truffle/DeployedAddresses.sol...


  TestVoting
    ✓ testChairman (67ms)
    ✓ testProposals (110ms)
    ✓ testGrantVoter (55ms)

  Contract: Voting
    ✓ Chairman should be creator
    ✓ Check First Proposals
    ✓ Check Grant Voter


  6 passing (1s)
~~~

## Incident ##

Q: Attempting to run transaction which calls a contract function, but recipient address 0x8cdaf0cd259887258bc13a92c0a6da92698644c0 is not a contract address

~~~ js
truffle(develop)> migrate
Using network 'develop'.

Error: Attempting to run transaction which calls a contract function, but recipient address 0x8cdaf0cd259887258bc13a92c0a6da92698644c0 is not a contract address
    at Object.InvalidResponse (/usr/local/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/errors.js:38:1)
    at /usr/local/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/requestmanager.js:86:1
    at /usr/local/lib/node_modules/truffle/build/webpack:/packages/truffle-provider/wrapper.js:134:1
    at XMLHttpRequest.request.onreadystatechange (/usr/local/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/httpprovider.js:128:1)
    at XMLHttpRequestEventTarget.dispatchEvent (/usr/local/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:64:1)
    at XMLHttpRequest._setReadyState (/usr/local/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:354:1)
    at XMLHttpRequest._onHttpResponseEnd (/usr/local/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:509:1)
    at IncomingMessage.<anonymous> (/usr/local/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:469:1)
    at IncomingMessage.emit (events.js:165:20)
    at endReadableNT (_stream_readable.js:1101:12)
    at process._tickCallback (internal/process/next_tick.js:152:19)
~~~

A: Remove ./build

~~~ shell
$rm -rf ./build/
~~~

Q: This looks like an address but has an invalid checksum

~~~js
/Users/haimhuan/workspace/EthereumLab/Voting/test/TestVoting.sol:9:22: Warning: This looks like an address but has an invalid checksum. If this is not used as an address, please prepend '00'. Correct checksummed address: '0x5AEDA56215b167893e80B4fE645BA6d5Bab767DE'. For more information please see https://solidity.readthedocs.io/en/develop/types.html#address-literals
    address voter1 = 0x5aeda56215b167893e80b4fe645ba6d5bab767de;
                     ^----------------------------------------^
~~~

A: Fix checksum with web3
Note the different case of letters

~~~js
web3.toChecksumAddress("0x5aeda56215b167893e80b4fe645ba6d5bab767de")
"0x5AEDA56215b167893e80B4fE645BA6d5Bab767DE"
~~~

## Reference ##

* Test
  * [Test-driven development with Solidity](https://michalzalecki.com/ethereum-test-driven-introduction-to-solidity/)
  * [Truffle: Testing Smart Contracts](https://www.sitepoint.com/truffle-testing-smart-contracts/)
