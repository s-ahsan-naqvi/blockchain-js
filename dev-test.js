import { Blockchain } from "./blockchain.js";

const blockchain = new Blockchain()


blockchain.addBlock('hello')


blockchain.addBlock('world')


blockchain.addBlock('from')

console.log(blockchain.toString())
