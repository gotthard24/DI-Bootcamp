import fs from 'fs'

function display() {
    fs.readFile("./files/fileData.txt", "utf-8", (err, data) => {
        if (err) return console.log(err);
        
        console.log(data);
    });
}

export default display