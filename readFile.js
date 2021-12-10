const fs = require("fs");

fs.readFile("helloWorld.txt", "utf8", function(err, data) {
    if (err) {
        console.log(err)
        return;
    }
    console.log(data);
})

console.log("ReadFile called");