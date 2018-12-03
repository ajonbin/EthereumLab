var VotingWithEvent = artifacts.require("./VotingWithEvent.sol");

module.exports = function(deployer) {
  deployer.deploy(VotingWithEvent, [web3.fromAscii("John"),web3.fromAscii("Mike"),web3.fromAscii("Alice")]);
};
