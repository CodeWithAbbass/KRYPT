const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();
  await transactions.waitForDeployment();
  const address = await transactions.getAddress();
  console.log("Contract deployed to:", address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
 

// npx hardhat run scripts/deploy.js --network sepolia