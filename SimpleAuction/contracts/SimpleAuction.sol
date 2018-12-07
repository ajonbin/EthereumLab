pragma solidity >0.4.21 <0.6.0;

contract SimpleAuction {
    //State
    address public beneficiary;
    uint public auctionEndTime;
    bool public bidEnded;

    uint public highestBidPrice;
    address public highestBidder;

    mapping(address => uint) public toRefund;

    //Event
    event HighestBidIncreased(address bidder, uint bidPrice);
    event AuctionEnd(address winner, uint price);

    constructor (uint _bidTime, address _beneficiary) public {
        auctionEndTime = now + _bidTime;
        beneficiary = _beneficiary;
    }

    function bid() public payable {
        require(now < auctionEndTime, "Auction already ended");
        require(msg.value > highestBidPrice, "Your price is not the highest");

        if(highestBidPrice != 0){
            toRefund[highestBidder] += highestBidPrice;
        }

        highestBidPrice = msg.value;
        highestBidder = msg.sender;

        emit HighestBidIncreased(highestBidder, highestBidPrice);
    }

    function withdraw() public returns (bool) {
        uint refundAmount = toRefund[msg.sender];
        require(refundAmount > 0, "You didn't bid");

        //Must set to 0 before call send() for the reentry security issue
        toRefund[msg.sender] = 0;

        if(!msg.sender.send(refundAmount)){
            toRefund[msg.sender] = refundAmount;
            return false;
        }
        return true;
    }

    function auctionEnd() public {
        //1. Conditions
        require(now >= auctionEndTime, "Auction not end yet");
        require(bidEnded == false, "Auction already ended");

        //2. Effect
        bidEnded = true;
        emit AuctionEnd(highestBidder,highestBidPrice);

        //3. Interaction
        beneficiary.transfer(highestBidPrice);
    }

}