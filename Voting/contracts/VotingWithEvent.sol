pragma solidity >=0.4.21 <0.6.0;

contract VotingWithEvent {
    struct Voter {
        uint weight;
        bool voted;
        address delegateTo;
        uint votedProposal;
    }

    struct Proposal {
        bytes32 name;
        uint voteCount;
    }

    address public chairman;

    mapping(address => Voter) public voters;

    Proposal[] public proposals;
    
    event eventGrantVoter(address voter);
    event eventDelegate(address from, address to);
    event eventVote(address voter,uint proposal, uint count);

    constructor (bytes32[] memory proposalNames) public {
        chairman = msg.sender;
        voters[chairman].weight = 1;

        for (uint i = 0; i < proposalNames.length; i++) {
            proposals.push(Proposal({
                name: proposalNames[i],
                voteCount:0
            }));
        }
    }

    function grantRightToVote(address voter) public {
        require(msg.sender == chairman, "Only Chairman can grant right to voter");
        require(voters[voter].voted == false, "The voter has voted");
        require(voters[voter].weight == 0, "The Voter already granted");
        voters[voter].weight = 1;
        emit eventGrantVoter(voter);
    }

    function delegateRightTo(address to) public {
        Voter storage sender = voters[msg.sender];
        require(!sender.voted, "You have already voted");
        require(to != msg.sender, "Can't delegate to yourself");
        while (voters[to].delegateTo != address(0)){
            to = voters[to].delegateTo;
            require(to != msg.sender, "Loop delegation found");
        }

        sender.voted = true;
        sender.delegateTo = to;
        
        Voter storage delegator = voters[to];
        if (delegator.voted == true){
            proposals[delegator.votedProposal].voteCount += sender.weight;
        }else{
            delegator.weight += sender.weight;
        }
        emit eventDelegate(msg.sender, to);
    }

    function vote(uint proposal) public {
        Voter storage sender = voters[msg.sender];
        require(sender.weight != 0, "You have no right to vote");
        require(sender.voted == false, "Already voted");

        sender.voted = true;
        sender.votedProposal = proposal;

        proposals[proposal].voteCount += sender.weight;

        emit eventVote(msg.sender, proposal, proposals[proposal].voteCount);
    }

    function winningProposal() public view returns (uint winner){
        uint winningCount = 0;
        for (uint p = 0; p < proposals.length; p++){
            if (proposals[p].voteCount > winningCount){
                winningCount = proposals[p].voteCount;
                winner = p;
            }
        }
    }

    function winnerName() public view returns (bytes32 name){
        name = proposals[winningProposal()].name;
    }
}