import { useEffect, useState } from "react";
import { getCurrentWalletConnected, connectWallet, mintNFT } from "./utils/interact.js";

const Minter = (props) => {

  //State variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");
 
  useEffect(async () => { //TODO: implement
    const {address, status} = await getCurrentWalletConnected();
    setWallet(address)
    setStatus(status);
    addWalletListener();
  }, []);

  const connectWalletPressed = async () => { //TODO: implement
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onMintPressed = async () => { //TODO: implement
    const { status } = await mintNFT(url, name, description);
    setStatus(status);
  };

  function addWalletListener() {
  if (window.ethereum) {
    window.ethereum.on("accountsChanged", (accounts) => {
      if (accounts.length > 0) {
        setWallet(accounts[0]);
        setStatus("👆🏽 Write a message in the text-field above.");
      } else {
        setWallet("");
        setStatus(" Connect to Metamask using the top right button.");
      }
    });
  } else {
    setStatus(
      <p>
        {" "}
        {" "}
        <a target="_blank" href={`https://metamask.io/download.html`}>
          You must install Metamask, a virtual Ethereum wallet, in your
          browser.
        </a>
      </p>
    );
  }
}

  return (
    <div className="Minter">
      <button id="walletButton" onClick={connectWalletPressed}>
        {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>

      <br></br>
      <h1 id="title">NFT Minter</h1>
      <form>
        <h2>Link to asset: </h2>
        <input
          type="text"
          placeholder="https://gateway.pinata.cloud/ipfs/<hash>"
          onChange={(event) => setURL(event.target.value)}
        />
        <h2>Name: </h2>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
        <h2>Description: </h2>
        <input
          type="text"
          placeholder="Description"
          onChange={(event) => setDescription(event.target.value)}
        />
      </form>
      <button id="mintButton" onClick={onMintPressed}>
        Mint NFT
      </button>
      <p id="status">
        {status}
      </p>
      <br></br>
      <h1>List NFT:</h1>
      <div className="card">
        <img src="https://gateway.pinata.cloud/ipfs/QmYP7Nw5Zh2ZgkbNDox3tbT31hVh31L2gyV3wXap86ZMWW?preview=1" alt="Avatar"/>
          <div className="container">
            <h4><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
          </div>
      </div>


    </div>
  );
};

export default Minter;
