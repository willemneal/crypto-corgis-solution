export class Corgi {
  owner: string;
  name: string;
  dna: string;
  color:string;
  level: i32;
  metadata: CorgiMetaData;
}
// ADDING THE TOKEN METADATA TO THE INDIVIDUAL CORGI ALLOWS INTEROP WITH OTHERS
export class CorgiMetaData {
  attributes: string[];
}

export class CorgiArray {
  corgis: Array<Corgi>;
}

class CorgiTokenMarket {

  //   //Methods to call for Terms 
  //   name(): string {
  //     return NAME;
  //   }
  
  //   symbol(): string {
  //     return SYMBOL;
  //   }
  
  //   // Initialization
  //   init(initialOwner: string): void {
  //     near.log("initialOwner: " + initialOwner);
  //     assert(storage.getItem("init") == null, "Already initialized token supply");
  //     storage.setU64("io::" + initialOwner, TOTAL_SUPPLY);
  //     storage.setItem("init", "done");
  //   }
  
  //   // Total Supply for user
  //   totalSupply(): string {
  //     return TOTAL_SUPPLY.toString();
  //   }
  
  //   //Balance for owner
  //   // Owner ID
  //   ownerOf(tokenId: string): string {
  //     let corgi = this.getCorgi(tokenId);
  //     let owner = corgi.owner;
  //     return owner;
  //   }
  //   // Balance for owner
  //   balanceOf(owner: string): u64 {
  //     return balances.get(owner);
  //   }
  
  //   setBalance(owner: string, balance: u64): void {
  //     balances.set(owner, balance);
  //   }
  
  //   updateBalance(owner: string, increment: u64): void {
  //     let balance = this.balanceOf(owner);
  //     if (balance) {
  //       near.log(`${balance}`);
  //     } else {
  //       near.log("issues");
  //     }
  //   }
  
  //   //Actions for Corgi
  
  //   // Get and Set Corgu
  //   getCorgi(tokenId: string): Corgi {
  //     return corgis.get(tokenId);
  //   }
    
  //   setCorgi(corgi: Corgi): void {
  //     corgis.set(corgi.dna, corgi);
  //   }
  
  //   // Transfer Corgi
  //   transfer(to: string, tokenId: string): void {
  //     let corgi = this.getCorgi(tokenId);
  //     assert(corgi.owner !== context.sender, "corgi does not belong to " + context.sender);
  //     this.incrementNewOwnerCorgis(to, tokenId);
  //     this.decrementOldOwnerCorgis(corgi.owner, tokenId);
  //   }
    
  //   incrementNewOwnerCorgis(to: string, tokenId: string): void {
  //     let corgi = this.getCorgi(tokenId);
  //     corgi.owner = to;
  //     near.log(to);
  //     this.setCorgisByOwner(corgi);
  //     this.setCorgi(corgi);
  //   }
  
  //   decrementOldOwnerCorgis(from: string, tokenId: string): void {
  //     let _corgis = corgisByOwner.get(from).corgis;
  //     for (let i = 0; i < _corgis.length; i++) {
  //       if (tokenId == _corgis[i].dna) {
  //         _corgis.splice(i, 1);
  //         near.log("match");
  //       }
  //     }
  //     let oca = new CorgiArray()
  //     oca.corgis = _corgis;
  //     corgisByOwner.set(from, oca);
  //   }
  
  //   //Create new Corgi
  //   _createCorgi(name: string, dna: string, color: string): Corgi {
  //     let corgi = new Corgi();
  //     corgi.owner = context.sender;
  //     corgi.dna = dna;
  //     corgi.name = name;
  //     corgi.color = color
  //     this.setCorgi(corgi);
  //     this.setCorgisByOwner(corgi);
  //     return corgi;
  //   }
  
  //   createRandomCorgi(name: string, seed: i32): Corgi {
  //     let randDna = this.generateRandomDna();
  //     let color = this.generateRandomColorHex(seed);
  //     return this._createCorgi(name, randDna, color);
  //   }
  
  //   // Generate unique Corgi
  //   generateRandomDna(): string {
  //     let buf = near.randomBuffer(DNA_DIGITS);
  //     let b64 = base64.encode(buf);
  //     near.log(b64);
  //     return b64;
  //   }
  
  //   generateRandomColorHex(int: i32): string {
  //     Math.seedRandom(int);
  //     let rand = Math.floor(Math.random() * 16777215) as u32;
  //     let hex = this.intToHex(rand);
  //     return "#" + hex;
  //   }
    
  //   intToHex(integer: u32): string {
  //     let res = new Array<string>();
  //     do {
  //       let t = integer / 16;
  //       let r = integer % 16;
  //       integer = t;
  //       res.push(HEX_ALPHABET[r]);
  //     } while (integer);
  //     let hex = res.reverse().join('');
  //     return hex.length % 2 ? "0" + hex : hex;
  //   }
    
  //   // Actions By Owner
  //   getCorgisByOwner(owner: string): CorgiArray {
  //     return corgisByOwner.get(owner);
  //   }
  
  //   setCorgisByOwner(corgi: Corgi): void {
  //     let _corgis = this.getCorgisByOwner(corgi.owner).corgis;
    
  //     if (_corgis == null) {
  //       _corgis = new Array();
  //       _corgis.push(corgi);
  //     } else {
  //       _corgis.push(corgi);
  //     }
    
  //     let ca = new CorgiArray();
    
  //     ca.corgis = _corgis;
  //     corgisByOwner.set(corgi.owner, ca);
  //   }
  
  //   // Get the owner but not use for now
  //   getSender(): string {
  //     return context.sender;
  //   }
    
  //   //ERROR handling
  //   _corgiDNEError(corgi: Corgi): bool {
  //     return assert(corgi == null, "This corgi does not exist");
  //   }
  
  // }