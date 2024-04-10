// Exercise 3: File Management Using CommonJS Syntax
const fs = require('fs');

function readFile(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, data);
    });
}

function writeFile(filePath, content, callback) {
    fs.writeFile(filePath, content, 'utf8', (err) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null);
    });
}

module.exports = {
    readFile,
    writeFile
};

// readFile('C:\Users\User1\DI-Folders\DI-Bootcamp\Week7\Day4\XP\smth.txt')