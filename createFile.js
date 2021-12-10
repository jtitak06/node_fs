const fs = require("fs");

let data = "Hello World!"

fs.writeFile("helloWorld.txt", data, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(fs.readFileSync("helloWorld.txt", "utf8"))
    }
})