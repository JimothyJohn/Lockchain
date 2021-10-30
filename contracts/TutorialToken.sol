// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.9.0;

import "/Users/nick/github/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract TutorialToken is ERC20 {
    uint256 public INITIAL_SUPPLY = 12000;

    constructor() public ERC20("TutorialToken", "TT") {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}
