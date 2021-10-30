// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.9.0;

contract SimpleStorage {
    event StorageSet(string _message);

    uint256 public storedData;
    string public userName; 

    function set(uint256 x, string memory _sender) public {
        storedData = x;
        userName = _sender;
        emit StorageSet("Data stored successfully!");
    }
}
