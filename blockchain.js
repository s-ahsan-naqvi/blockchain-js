import Block from "./block.js";

export class Blockchain {
    constructor() {
        this.chain = [Block.genesis()]
    }

    addBlock(data) {
        
        const block = Block.mineBlock(this.chain[this.chain.length - 1], data)
        this.chain.push(block);

        return block
    }
}