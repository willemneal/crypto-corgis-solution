# Crypto Corgis

## Description

The contract implements a "Non-Fungible Token," or NFT for short. In this case it is tradeable corgis that can be owned by one person at a time. 

## To Run on local node
Step 1: Create an account for the contract
```
npm install
near create_account account_id
```

Step 2:
modify src/config.js line that sets the ACCOUNT_ID. Set it to id from step 1.
```
const ACCOUNT_ID = "contractId"; /* TODO: fill this in! */
```

Step 3:
Run the start script in the terminal, which will deploy the contract with default config and start a server for the static files.
```
npm start
```

Step 3:
Open http://localhost:5000
That's it!

It has a live reloading server for the frontend, so anything that you change there will be immediately reflected.

## To Test

```
npm install
npm run-script build
npm test
```

## To Explore

- `assembly/main.ts` for the contract code
- `src/index.html` for the front-end HTML
- `src/main.js` for the JavaScript front-end code and how to integrate contracts
- `src/test.js` for the JS tests for the contract
