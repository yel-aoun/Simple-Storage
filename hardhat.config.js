require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomicfoundation/hardhat-verify");



task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();
  
  for (const account of accounts) {
    console.log(account.address);
  }
});


  const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
  const PRIVATE = process.env.PRIVATE_KEY;
  const ETH_API_KEY = process.env.ETHERSCAN_API_KEY
  console.log(ETH_API_KEY);

  /** @type import('hardhat/config').HardhatUserConfig */
  module.exports = {
    defaultNetwork: "hardhat",
    networks:{
      sepolia: {
        url: SEPOLIA_RPC_URL,
        accounts:[PRIVATE],
        chainId:11155111,
      },
    },
    solidity: "0.8.19",
    etherscan:{
      apiKey:ETH_API_KEY,
    }
  };