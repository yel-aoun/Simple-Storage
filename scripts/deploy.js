// imports

const {ethers, run, network } = require("hardhat")

async function main () {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
  console.log("Deploying contract ...")
  const contract = await SimpleStorageFactory.deploy();
  // await contract.deploymentTransaction().wait(1);  // await SimpleStorage.deployed();
  console.log(contract.target)
  // console.log(network.config)
  if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY ){
    await contract.deploymentTransaction().wait(6);
    await verify(contract.target, [])
  }
}

async function verify(contractAddress, args) {
  console.log("verifying contract ...")
  try {

    await run("verify", {
      address:contractAddress,
      constructorArguments:args,
    })
  } catch(e) {
    if (e.message.toLowerCase().include("already verified")){
      console.log("already verified");
    }
    else
      console.log(e); 
  }
}

main()
  .then(() => process.exit(0))
  .catch((error)=> {
    console.error(error);
    process.exit(1);
  });