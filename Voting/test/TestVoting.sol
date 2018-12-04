pragma solidity >=0.4.21 <0.6.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Voting.sol";

contract TestVoting{
    bytes32[] proposals;
    address voter1 = 0x5AEDA56215b167893e80B4fE645BA6d5Bab767DE;
    Voting voting = Voting(DeployedAddresses.Voting());
    Voting votingNew;

    function beforeEach() public {
        votingNew = new Voting(proposals);

        proposals = new bytes32[](2);
        proposals[0] = "Peppa";
        proposals[0] = "Geoge";
    }
    function testChairman() public {
        Assert.equal(this, votingNew.chairman(), "Chairman is not the creator");
    }

    function testProposals() public {
        Assert.equal(msg.sender, voting.chairman(), "Chairman is not the creator");

        bytes32 name;
        uint count;
        (name,count) = voting.proposals(0);
        Assert.equal("John", name, "First proposal is not John");
        (name,count) = voting.proposals(1);
        Assert.equal("Mike", name, "Second proposal is not Mike");
        (name,count) = voting.proposals(2);
        Assert.equal("Alice", name, "3rd proposal is not Alice");
    }

    function testGrantVoter() public {
        votingNew.grantRightToVote(voter1);
        
        uint weight;
        bool voted;
        address delegateTo;
        uint votedProposal;

        (weight, voted, delegateTo,votedProposal) = votingNew.voters(voter1);

        Assert.equal(1, weight, "Voter's init weight should be 1");
        Assert.equal(false, voted, "Voter's should not voted");
        

    }
}