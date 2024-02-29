// Import the Hardhat module
const { HardhatNetwork } = require("hardhat");

// Connect to the local network
const network = new HardhatNetwork();

// Get the deployed instance of the contract
const contract = await network.getContract("MyContract", contractAddress);

// Call the getPair function
const pair = await contract.getPair();
console.log(pair);

// Verify the returned pair address
const pairAddress = pair.address;
console.log(`Pair address: ${pairAddress}`);

// Get the balance of tokenA in the pair
const balanceA = await contract.getBalance(tokenAAddress, pairAddress);
console.log(`Token A balance: ${balanceA}`);

// Get the balance of tokenB in the pair
const balanceB = await contract.getBalance(tokenBAddress, pairAddress);
console.log(`Token B balance: ${balanceB}`);