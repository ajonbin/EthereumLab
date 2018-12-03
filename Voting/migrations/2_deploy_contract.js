var Voting = artifacts.require("./Voting.sol");

module.exports = function(deployer) {
  deployer.deploy(Voting, [web3.fromAscii("John"),web3.fromAscii("Mike"),web3.fromAscii("Alice")]);
};
