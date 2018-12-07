const path = require("path");
const fs = require("fs");
const solc = require("solc");


const simpleauctonPath = path.resolve(__dirname, '../contracts', 'SimpleAuction.sol');
const source = fs.readFileSync(simpleauctonPath, 'utf8');
const contract = solc.compile(source, 1).contracts[':SimpleAuction'];
//console.log(contract);
module.exports = {abi:contract.interface, bytecode:contract.bytecode}
