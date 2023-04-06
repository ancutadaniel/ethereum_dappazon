require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config({ path: './.env' });

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const MNEMONIC = process.env.MNEMONIC;

// Test task
task('balance', "Prints an account's balance")
  .addParam('account', "The account's address")
  .setAction(async (taskArgs) => {
    const balance = await ethers.provider.getBalance(taskArgs.account);

    console.log(ethers.utils.formatEther(balance), 'ETH');
  });

// npx hardhat balance --account 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
// log 10000.0 ETH

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.17',
  networks: {
    localhost: {},
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
    },
  },
};
