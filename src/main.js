// Loads nearlib and this contract into window scope.
import "babel-polyfill";

import React from 'react'
import ReactDOM from "react-dom";

import AppBuilder from './frontend/container/index'
import "./config.js"

async function doInitContract() {
  // window.near = await nearlib.dev.connect(nearConfig);
  // nearConfig.nodeUrl = 'https://rpc.nearprotocol.com';
  // nearConfig.helperUrl = 'https://near-contract-helper.onrender.com';
  console.log("nearConfig", nearConfig);
  // const walletBaseUrl = 'https://wallet.nearprotocol.com';
  // window.walletAccount = new nearlib.WalletAccount(nearConfig.contractName, walletBaseUrl);

  // New version for nearlib
  // Initializing connection to the NEAR node.
  window.near = await nearlib.connect(Object.assign(nearConfig, { deps: { keyStore: new nearlib.keyStores.BrowserLocalStorageKeyStore() } }));
  // Needed to access wallet login
  window.walletAccount = new nearlib.WalletAccount(window.near);


  // Getting the Account ID. If unauthorized yet, it's just empty string.
  window.accountId = window.walletAccount.getAccountId();

  // Initializing near and near client from the nearlib.
  // window.near = new nearlib.Near(new nearlib.NearClient(
  //   window.walletAccount,
  //   // We need to provide a connection to the blockchain node which we're going to use
  //   new nearlib.LocalNodeConnection(nearConfig.nodeUrl),
  // ));

  window.contract = await near.loadContract(nearConfig.contractName, {
    viewMethods: [
      "totalSupply",
      "balanceOf",
      "allowance",
      "ownerOf",
      "name",
      "symbol",
      "getCorgisByOwner",
      "getCorgi",
      "getSender" ],
    changeMethods: [
      "init",
      "transfer",
      "approve",
      "transferFrom",
      "createRandomCorgi",
      "takeOwnership",
      "setCorgi",
      "setCorgisByOwner",
      "setBalance",
      "deleteCorgiProfile"],
    sender: window.accountId
  });
}

function sleep(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, time);
  });
}

// Render to the front end

// const history = createBrowserHistory()
// const store = createStore(createRootReducer(history), createMiddleware(history))

window.nearInitPromise = doInitContract().then(() => {
  ReactDOM.render(<AppBuilder contract={contract} wallet={walletAccount}/>,
    document.getElementById('container')
  );
}).catch(console.error)
