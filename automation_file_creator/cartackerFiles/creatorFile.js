
const fs = require('fs');
// @ts-ignore
const fileExists = path => file => fs.existsSync(`${path}/${file}`);

// @ts-ignore
const writeToPath = path => (file, content) => {
    const filePath = `${path}/${file}`;

    // @ts-ignore
    fs.writeFile(filePath, content, err => {
        if(err) throw err;

        console.log("Created file: ", filePath);
        return true;
    })
}


module.exports = { writeToPath, fileExists };