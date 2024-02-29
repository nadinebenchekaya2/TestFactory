// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;


contract MyContract {
    address factory;
    address tokenA;
    address tokenB;
    
   
    constructor(address _factory, address _tokenA, address _tokenB) public {
        factory = _factory;
        tokenA = _tokenA;
        tokenB = _tokenB;
    }

    function getPair() public view returns (IUniswapV2Pair pair) {
        (pair) = factory.getPair(tokenA, tokenB);
    }
}
