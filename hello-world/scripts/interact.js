const { API_KEY, PRIVATE_KEY, CONTRACT_ADDRESS} = process.env

const { ethers } = require('hardhat')
const contract = require('../artifacts/contracts/HelloWorld.sol/HelloWorld.json')
const alchemyProvider = new ethers.providers.AlchemyProvider(network='ropsten', API_KEY);
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider)
const helloWordContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    const message = await helloWordContract.message();
    console.log('The message is: ', message);
    console.log('Updating the message...');
    const tx = await helloWordContract.update('Goodbye world!')
    await tx.wait();

    const newMessage = await helloWordContract.message();
    console.log('The new message is: ', newMessage);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });