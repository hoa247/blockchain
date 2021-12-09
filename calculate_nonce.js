/*
-block: 3
-nonce: 1
-data:
    + trans1: +6$
    + trans2: -5$
- preHash: 000097f1ad678374cbec40bda3f96dec36dcf863b4913ad876a08449051d8332
*/

const sha256 = require('crypto-js/sha256');

let block = {
    block: 3,
    nonce: 1,
    data: {
        trans1: '+6$',
        trans2: '-5$',
    },
    preHash: '000097f1ad678374cbec40bda3f96dec36dcf863b4913ad876a08449051d8332',
}
let hash = '';
while (hash.substring(0, 4) !== '0000') {
    block.nonce++;
    hash = sha256(JSON.stringify(block)).toString()
    console.log(hash);
}
block.hash = hash
console.log(block);