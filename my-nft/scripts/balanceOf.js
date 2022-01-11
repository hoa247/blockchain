require('dotenv').config();
let { API_URL, CONTRACT_ADDRESS, PUBLIC_KEY } = process.env;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);
const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
const nftContract = new web3.eth.Contract(contract.abi, CONTRACT_ADDRESS);


async function balanceOf() {
  NFTs = await nftContract.methods.getTokensByOwner(PUBLIC_KEY).call();
  // NFT = await nftContract.methods.tokenOfOwnerByIndex(PUBLIC_KEY, 1).call();
  // owner = await nftContract.methods.totalSupply().call();

  // uri = await nftContract.methods.tokenURI(1).call();
  console.log({
    NFTs,
    // NFT,
    // owner,
    // uri,
  });
}
balanceOf()

