// import "allocator/arena";
import { context, storage, near, collections, base64 } from "./near";
import { Corgi, CorgiArray, CorgiMetaData } from "./model.near";
// export { memory }

// export { CorgiTokenMarket } ;

// --- contract code goes below
///////////////////////////////
// ERC721 for Non Fungible Tokens

//Terms for CorgiToken
const NAME: string = "The NEAR Corgi Token";
const SYMBOL: string = "CORG"
const TOTAL_SUPPLY: u64 = 420;
const DNA_DIGITS: u32 = 16;
const HEX_ALPHABET: string = '0123456789abcdef';
//RARITY: 
//   common: "COMMON", 0.15-1
//   uncommon: "UNCOMMON", 0.05-0.15
//   rare: "RARE", 0.01-0.05
//   veryRare: "VERY RARE", 0-0.01
//   ultraRare: "ULTRA RARE" 0
//

// Collections where we store data
let balances = collections.map<string, u64>("b");
let corgis = collections.map<string, Corgi>("c");
let corgisByOwner = collections.map<string, CorgiArray>("co");

// *********************************************************
// // Methods to call for Terms
export function name(): string {
  return NAME;
}

export function symbol(): string {
  return SYMBOL;
}

// Initializaton
export function init(initialOwner: string): void {
  near.log("initialOwner: " + initialOwner);
  assert(storage.getItem("init") == null, "Already initialized token supply");
  storage.setU64("io::" + initialOwner, TOTAL_SUPPLY);
  storage.setItem("init", "done");
}

// Balance for owner
export function balanceOf(owner: string): u64 {
  return balances.get(owner);
}

export function updateBalance(owner: string, increment: u64): void {
  let balance = balanceOf(owner);
  if (balance) {
    near.log(`${balance}`);
  } else {
    near.log("issues");
  }
}

export function setBalance(owner: string, balance: u64): void {
  balances.set(owner, balance);
}

// Total supply
export function totalSupply(): string {
  return TOTAL_SUPPLY.toString();
}

//Methods for owner

export function ownerOf(tokenId: string): string {
  let corgi = getCorgi(tokenId);
  let owner = corgi.owner;
  return owner;
}

export function getCorgisByOwner(owner: string): CorgiArray {
  return corgisByOwner.get(owner);
}

export function setCorgisByOwner(corgi: Corgi): void {
  let _corgis = getCorgisByOwner(corgi.owner).corgis;

  if (_corgis == null) {
    _corgis = new Array();
    _corgis.push(corgi);
  } else {
    _corgis.push(corgi);
  }

  let ca = new CorgiArray();

  ca.corgis = _corgis;
  corgisByOwner.set(corgi.owner, ca);
}

// Methods for Corgi
export function getCorgi(tokenId: string): Corgi {
  return corgis.get(tokenId);
}

export function setCorgi(corgi: Corgi): void {
  corgis.set(corgi.dna, corgi);
}

export function getSender(): string {
  return context.sender;
}

function deleteCorgi(tokenId: string): void {
  corgis.delete(tokenId)
}

export function deleteCorgiProfile(tokenId: string): Array<Corgi> {
  let corgi = getCorgi(tokenId)
  decrementOldOwnerCorgis(corgi.owner, tokenId);
  let leftCorgis = getCorgisByOwner(corgi.owner).corgis;
  near.log("get corgis")
  return leftCorgis;
}

// Transfer between users
export function transfer(to: string, tokenId: string, message:string, sender:string): Array<Corgi> {
  let corgi = getCorgi(tokenId);
  corgi.message = message;
  corgi.sender = sender;
  assert(corgi.owner !== context.sender, "corgi does not belong to " + context.sender);
  incrementNewOwnerCorgis(to, tokenId);
  decrementOldOwnerCorgis(corgi.owner, tokenId);
  let leftCorgis = getCorgisByOwner(corgi.owner).corgis;
  near.log("get corgis")
  return leftCorgis;
}

function incrementNewOwnerCorgis(to: string, tokenId: string): void {
  let corgi = getCorgi(tokenId);
  corgi.owner = to;
  near.log(to);
  setCorgisByOwner(corgi);
  setCorgi(corgi);
}

function decrementOldOwnerCorgis(from: string, tokenId: string): void {
  let _corgis = corgisByOwner.get(from).corgis;
  for (let i = 0; i < _corgis.length; i++) {
    if (tokenId == _corgis[i].dna) {
      _corgis.splice(i, 1);
      near.log("match");
    }
  }
  let oca = new CorgiArray();
  oca.corgis = _corgis;
  corgisByOwner.set(from, oca);
  deleteCorgi(tokenId);
}

// Create unique Corgi
export function createRandomCorgi(name: string, color: string, backgroundColor: string, quote: string): Corgi {
  let randDna = generateRandomDna();
  let rate = generateRandomrate();
  let sausage = generateRandomLength(rate);
  return _createCorgi(name, randDna, color, rate, sausage, backgroundColor, quote);
}

function _createCorgi(name: string, dna: string, color: string, rate: string, sausage: string, backgroundColor: string, quote: string): Corgi {
  let corgi = new Corgi();
  corgi.owner = context.sender;
  corgi.dna = dna;
  corgi.name = name;
  corgi.color = color
  corgi.sausage = sausage;
  corgi.backgroundColor = backgroundColor;
  corgi.quote = quote;
  corgi.rate = rate;
  setCorgi(corgi);
  setCorgisByOwner(corgi);
  return corgi;
}

function generateRandomDna(): string {
  let buf = near.randomBuffer(DNA_DIGITS);
  let b64 = base64.encode(buf);
  return b64;
}

function generateRandomrate(): string {
  Math.seedRandom(12345)
  let rand = Math.random()
  if (rand > 0.1) {
    return "COMMON"
  } else if (rand > 0.05) {
    return "UNCOMMON"
  } else if (rand > 0.01) {
    return "RARE"
  } else if (rand > 0) {
    return "VERY RARE"
  } else {
    return "ULTRA RARE"
  }
}

// random is not working
function generateRandomLength(rarity: string): string {
  Math.seedRandom(67890);
  let l = Math.random();
  let sausage = 0.0;
  if (rarity == "VERY RARE") {
    sausage = l * 50.0 + 150.0;
  } else if (rarity == "RARE") {
    sausage = l * 50.0 + 100.0;
  } else if (rarity == "UNCOMMON") {
    sausage = l * 50.0 + 50.0;
  } else if (rarity == "COMMON") {
    sausage = l * 50.0;
  }
  return sausage.toString()
}

function intToHex(integer: u32): string {
  let res = new Array<string>();
  do {
    let t = integer / 16;
    let r = integer % 16;
    integer = t;
    res.push(HEX_ALPHABET[r]);
  } while (integer);
  let hex = res.reverse().join('');
  return hex.length % 2 ? "0" + hex : hex;
}

// function generateRandomColorHex(int: i32): string {
//   Math.seedRandom(int);
//   let rand = Math.floor(Math.random() * 16777215) as u32;
//   let hex = intToHex(rand);
//   return "#" + hex;
// }

//ERROR handling
function _corgiDNEError(corgi: Corgi): bool {
  return assert(corgi == null, "This corgi does not exist");
}


// 

// simplified version of the ERC721
// contract ERC721 {
//    ERC20 compatible functions
//    function name() constant returns (string name);
//    function symbol() constant returns (string symbol);

//    function totalSupply() constant returns (uint256 totalSupply);
//    function balanceOf(address _owner) constant returns (uint balance);

//    Functions that define ownership
//    function ownerOf(uint256 tokenId) constant returns (address owner);

//    function approve(address to, uint256 tokenId);
//    function takeOwnership(uint256 tokenId);

//   //  function transfer(address to, uint256 tokenId);
//    function tokenOfOwnerByIndex(address _owner, uint256 _index) constant returns (uint tokenId);

//    // Token metadata
//    function tokenMetadata(uint256 tokenId) constant returns (string infoUrl);

