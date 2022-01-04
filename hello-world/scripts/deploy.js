async function main() {
    const HelloWorld = await ethers.getContractFactory('HelloWorld');

    const helloWord = await HelloWorld.deploy('Heluuuuu!')
    console.log("Contract deployed to address: ", helloWord.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });