// Loads nearlib and this contract into window scope.
import "babel-polyfill";
import Tokens from "./frontend/corgi.jsx";
import React from "react";
import ReactDOM from "react-dom";
import "./frontend/corgi.css";
import "./config.js"

async function doInitContract() {
  // window.near = await nearlib.dev.connect(nearConfig);
  nearConfig.nodeUrl = 'https://studio.nearprotocol.com/devnet';
  nearConfig.helperUrl = 'https://studio.nearprotocol.com/contract-api';
  console.log("nearConfig", nearConfig);

  const walletBaseUrl = 'https://wallet.nearprotocol.com';
  window.walletAccount = new nearlib.WalletAccount(nearConfig.contractName, walletBaseUrl);

  // Getting the Account ID. If unauthorized yet, it's just empty string.
  window.accountId = window.walletAccount.getAccountId();

  // Initializing near and near client from the nearlib.
  window.near = new nearlib.Near(new nearlib.NearClient(
    window.walletAccount,
    // We need to provide a connection to the blockchain node which we're going to use
    new nearlib.LocalNodeConnection(nearConfig.nodeUrl),
  ));

  window.contract = await near.loadContract(nearConfig.contractName, {
    viewMethods: [
      "totalSupply",
      "balanceOf",
      "ownerOf",
      "name",
      "symbol",
      "getCorgisByOwner",
      "getCorgi",
      "getSender",
      "allowance",],
    changeMethods: [
      "init",
      "transfer",
      "createRandomCorgi",
      "setCorgi",
      "setCorgisByOwner",
      "setBalance",
      "approve",
      "transferFrom",
      "takeOwnership"],
    sender: window.accountId
  });
}

function sleep(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, time);
  });
}

window.nearInitPromise = doInitContract().then(()=>{
  ReactDOM.render( <Tokens contract={contract} wallet={walletAccount} /> ,
    document.getElementById('tokens')
  );
}).catch(console.error)