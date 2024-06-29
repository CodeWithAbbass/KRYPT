require("@nomicfoundation/hardhat-toolbox");
const contractAddress = "0x6D69dBe79ffD825d054979769CEbe6E9EF4D7f5a";
const API_KEY = "0dhDck3KiXW9ImX6afFJaxV9znkAcsS3";
const API_URL =
  "https://eth-sepolia.g.alchemy.com/v2/0dhDck3KiXW9ImX6afFJaxV9znkAcsS3";
const PRIVATE_KEY =
  "0fc49bf768bb3b865aef29bb493072aa8b8bb9d873a5e28b599dbe30120558c8"; // Account1
const PUBLIC_KEY = "0xcC7EaABcCb706ea79de97991ac3026a46cdC999c";

/** @type import('hardhat/config').HardhatUserConfig */
https: module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: API_URL, // Alchemy Https URL
      accounts: [PRIVATE_KEY], // Account Private Key Where You Want To Fund This Contract.
    },
  },
};
