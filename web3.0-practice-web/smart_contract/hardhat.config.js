require("@nomicfoundation/hardhat-toolbox");

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "1x0lBoATohIXoT7z2IxslrBSBp2W8_EV";

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const GOERLI_PRIVATE_KEY = "47cfe95e227715d63b38a578af43e6d1ab42207cf39a8266af04e2eff8c40b00";

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/3Dgg5cwby40IBrXEqRcRQaRAMayi4KIF`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};