pragma solidity ^0.4.21;

contract Faucet {
    function withdraw(uint amount) public {
        require(amount <= 10E16);
        msg.sender.transfer(amount);
    }

    function () public payable {
        
    }
}