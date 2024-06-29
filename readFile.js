const { readFile, readFileSync } = require("fs");

// sync
// const txt = readFileSync("./hello.txt", "utf-8");

// async
readFile("./hello.txt", "utf-8", (err, txt) => {
    console.log(txt);
});

console.log("do this ASAP");