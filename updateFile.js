const fs = require("fs");

let data = " My name is Jeff.";

fs.appendFile("helloWorld.txt", data, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully appended file.")
    }
}); 