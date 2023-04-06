const hre = require('hardhat');

// Testing the getSigners() function from ethers.js
async function main() {
  const [account1, account2, account3] = await hre.ethers.getSigners();

  console.log(`Accounts used:
    "${account1.address}" (deployer)
    "${account2.address}" (account 1)
    "${account3.address}" (account 2)
  `);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
