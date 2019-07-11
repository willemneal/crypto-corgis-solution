import "allocator/arena";
export { memory };

import { context, storage, near, collections, base64 } from "./near";
import { Corgi, CorgiArray, CorgiMetaData } from "./model.near";

// --- contract code goes below
/////////////////////////////////

const NAME: string = "The NEAR Corgi Token";
const SYMBOL: string = "CORG";
const DNA_DIGITS: u32 = 16;
const HEX_ALPHABET = '0123456789abcdef';

let corgis = collections.map<string, Corgi>("c");
let corgisByOwner = collections.map<string, CorgiArray>("co");

export function name(): string {
  return NAME;
}

export function symbol(): string {
  return SYMBOL;
}

export function getCorgi(tokenId: string): Corgi {
  return corgis.get(tokenId);
}

function setCorgi(corgi: Corgi): void {
  corgis.set(corgi.dna, corgi);
}

export function getCorgisByOwner(owner: string): CorgiArray {
  return corgisByOwner.get(owner);
}

function setCorgisByOwner(owner: string, corgiArray: CorgiArray): void {
  corgisByOwner.set(owner, corgiArray);
}

export function ownerOf(tokenId: string): string {
  return getCorgi(tokenId).owner;
}

export function balanceOf(owner: string): u64 {
  return getCorgisByOwner(owner).corgis.length;
}

export function tokenMetadata(tokenId: string): string[] {
  return getCorgi(tokenId).metadata.attributes;
}

export function transfer(to: string, tokenId: string): void {
  let corgi = getCorgi(tokenId);
  assert(corgi.owner !== context.sender, "corgi does not belong to " + context.sender);
  transferFrom(corgi.owner, to, tokenId);
}

function transferFrom(owner: string, to: string, tokenId: string): void {
  let corgi = getCorgi(tokenId);
  corgi.owner = to;
  setCorgi(corgi);

  addCorgiOwner(to, tokenId);
  removeCorgiOwner(owner, tokenId);
}

function removeCorgiOwner(owner: string, tokenId: string): void {
  let corgiArray = getCorgisByOwner(owner);
  for (let i = 0; i < corgiArray.corgis.length; ++i) {
    if (tokenId == corgiArray.corgis[i]) {
      corgiArray.corgis.slice(i, 1);
    }
  }
  setCorgisByOwner(owner, corgiArray);
}

function addCorgiOwner(owner: string, tokenId: string): void {
  let corgiArray = getCorgisByOwner(owner);
  if (corgiArray == null) {
    corgiArray = new CorgiArray();
    corgiArray.corgis = new Array<string>();
  }
  corgiArray.corgis.push(tokenId);
  setCorgisByOwner(owner, corgiArray);
}

function generateRandomDna(): string {
  let buf = near.randomBuffer(DNA_DIGITS);
  let b64 = base64.encode(buf);
  return b64;
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

function generateRandomColorHex(seed: i32): string {
  Math.seedRandom(seed);
  let rand = Math.floor(Math.random() * 16777215) as u32;
  let hex = intToHex(rand);
  return "#" + hex;
}

export function createRandomCorgi(name: string, seed: i32): Corgi {
  let randDna = generateRandomDna();
  let color = generateRandomColorHex(seed);
  let corgi = new Corgi();
  corgi.owner = context.sender;
  corgi.dna = randDna;
  corgi.name = name;
  corgi.color = color;
  setCorgi(corgi);
  addCorgiOwner(context.sender, randDna);
  return corgi;
}
