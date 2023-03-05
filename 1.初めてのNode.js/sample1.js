const { readFile } = require("fs");

console.log("A");

// __filenameは自分自身のファイルパスが入ります
readFile(__filename, (err, data) => {
  // ファイルの読み込みが終わった時に呼び出される
  console.log("B");
});

console.log("C");
