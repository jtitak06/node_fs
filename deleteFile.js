const fs = require("fs");

fs.unlink("CopyHelloWorld.txt", (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log("File deleted!")
})