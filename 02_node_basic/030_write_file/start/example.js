// ファイルへの書き込み
// __dirname, __filename
// path

const fs = require("fs");
const path = require("path");

console.log(__filename);

fs.writeFileSync(__dirname + "../dist/test.txt", "hello, node.js");
// console.log("hello, node.js");
