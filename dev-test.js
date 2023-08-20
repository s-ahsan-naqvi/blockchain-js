import { Blockchain } from "./blockchain.js";

const blockchain = new Blockchain()

console.log(blockchain)

blockchain.addBlock('hello')

console.log(blockchain)

blockchain.addBlock('world')

console.log(blockchain)

blockchain.addBlock('from')

console.log(blockchain)
