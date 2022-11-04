// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract MyToken {

    string public name;  // bitcoin
    string public symbol; // BTC
    uint256 public decimal = 9; // 9
    uint256 TotalSupply = 10 ether;   // 100$ -> 1000 

    // mapping is soemhting to create key and value pair, balanceOf (name) -- address (key type) -- uint256

    // mapping(key type-> value type) modifier name     --> name[key] = value
    mapping(address => uint256) public balanceOf;
    constructor(string memory _name, string memory _symbol) {
        name = _name;
        symbol = _symbol;
        balanceOf[msg.sender] = TotalSupply;
    }

    // now are going to create events to send / receive tokens

    event transferEvent(address indexed from, address indexed to, uint256 amt);

    function transfer(address payable _to, uint256 amount) payable public returns (bool x) {
        require(balanceOf[msg.sender] >= amount);
        balanceOf[msg.sender] = balanceOf[msg.sender] - amount;
        balanceOf[_to]+=amount;
        emit transferEvent(msg.sender, _to, amount);
        return true;
    }

    function tranferFrom (address payable _from, address payable _to, uint256 amount) payable public returns (bool x) {
         require(balanceOf[_from] >= amount);
         balanceOf[_from] = balanceOf[_from] - amount;
         balanceOf[_to]+=amount;
        emit transferEvent(_from, _to, amount);
        return true;
    }



}