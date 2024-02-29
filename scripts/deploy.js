const hre = require("hardhat");
const {
  addressFactory,
  addressRouter,
  addressFrom,
  addressTo,
} = require("../utils/AddressList");

const { erc20ABI, factoryABI, routerABI } = require("../utils/AbiList");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  const MyContract = await ethers.getContractFactory("MyContract");
  const contract = await MyContract.deploy(addressFactory, addressFrom, addressTo);
  await contract.deployed();
  const pair = await contract.getPair();
  console.log(pair);

  // We get the contract to deploy
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!");

  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
