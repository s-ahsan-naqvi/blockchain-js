import SHA256 from "crypto-js/sha256.js";

class Block {

    constructor(timestamp, lastHash, hash, data) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
        
    }

    toString() {
        return `Block -
        Timestamp: ${this.timestamp}
        Last Hash: ${this.lastHash.substring(0, 10)}
        hash     : ${this.hash.substring(0, 10)}
        data     : ${this.data}`
    }

    static genesis() {
        return new this('Genesis Time', '-----', 'fir57-h45h', [])
    }

    static mineBlock(lastBlock, data) {
        const timestamp = Date.now()
        const lastHash = lastBlock.hash;
        const hash = Block.hash(timestamp, lastHash, data);

        return new this(timestamp, lastHash, hash, data)
    }

    static hash(timestamp, lastHash, data) {
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }

}

export default Block