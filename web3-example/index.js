async function main() {
 const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
 const web3 = createAlchemyWeb3("https://eth-ropsten.alchemyapi.io/v2/5kv6dpTUMOcK3mR-Qi2H0XRD-Kji0RCn");
 const blockNumber = await web3.eth.getBlockNumber();
 console.log("The latest block number is " + blockNumber);
}
main();

