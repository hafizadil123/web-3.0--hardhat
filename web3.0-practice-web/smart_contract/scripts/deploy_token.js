// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const transactionsFactory = await hre.ethers.getContractFactory("MyToken");
  const transactionsContract = await transactionsFactory.deploy("Foodi", "FOO");

  await transactionsContract.deployed();

  console.log(
    `transactions address: ${transactionsContract.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.

const runMain = async () => {
  try {
    await main();
    process.exit(0)
  } catch(err) {
    console.log(err)
    process.exit(1)
  }
}
runMain();