// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.9.0;
/*
import "/Users/nick/github/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract GameItems is ERC20 {
    uint256 public INITIAL_SUPPLY = 12000;

    constructor() public ERC20("Gold", "GLD") {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}
*/

import "/Users/nick/github/openzeppelin-contracts/contracts/token/ERC1155/ERC1155.sol";

contract GameItems is ERC1155 {
    uint256 public constant GOLD = 0;

    constructor() public ERC1155("https://dapps.s3.amazonaws.com/lockchain/{id}.json") {
        _mint(msg.sender, GOLD, 10**18, "");
    }
}
