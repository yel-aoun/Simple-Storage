# SimpleStorage Smart Contract

This project contains a basic Ethereum smart contract written in Solidity called `SimpleStorage`. The contract allows users to store and retrieve a favorite number and also add people with their favorite numbers and names.

## Smart Contract Details

- **Contract Name:** SimpleStorage
- **Solidity Version:** ^0.8.19
- **License:** MIT

## Contract Functions

### 1. `store(uint256 _favoriteNumber)`

   - **Description:** Stores the provided favorite number.
   - **Parameters:**
     - `_favoriteNumber`: Unsigned integer representing the favorite number to be stored.
   - **Visibility:** Public

### 2. `retrieve()`

   - **Description:** Retrieves the currently stored favorite number.
   - **Returns:** Unsigned integer representing the stored favorite number.
   - **Visibility:** Public, View

### 3. `addPerson(string memory _name, uint256 _favoriteNumber)`

   - **Description:** Adds a person with a name and their favorite number to the contract.
   - **Parameters:**
     - `_name`: String representing the name of the person.
     - `_favoriteNumber`: Unsigned integer representing the favorite number of the person.
   - **Visibility:** Public

### 4. `people`

   - **Description:** Public array containing information about people added to the contract. Each entry is a struct with a favorite number and a name.

### 5. `nameToFavoriteNumber`

   - **Description:** Public mapping associating names with favorite numbers.

## Deployment and Verification

The contract can be deployed to the Sepolia test network. After deployment, it can be automatically verified on Etherscan using the provided deployment script.

### Deployment Script

The deployment script is included in the project and can be executed using Hardhat.

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

Ensure that the Sepolia network is correctly configured in your `hardhat.config.js` file.

## Verification Script
The deployment script includes an automatic verification step using the Hardhat verify task. This script checks if the contract has already been verified to avoid unnecessary re-verification.

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

Note: The verification process requires an Etherscan API key, which should be provided through the `ETHERSCAN_API_KEY` environment variable.