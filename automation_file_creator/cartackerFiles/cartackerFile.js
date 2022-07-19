
const chokidar = require('chokidar');
const { writeToPath, fileExists }  = require('./creatorFile.js');
const templates  = require('./templatesFile.js');

function createFiles(path, name) {
    const files = {
        index: "index.ts",
        component: `${name}.tsx`,
        scss: `${name}.module.scss`
    }

    if(name !== "components") {
        const writeFile = writeToPath(path);
        const toFileMissingBool = (file) => !fileExists(path)(file);
        // @ts-ignore
        const checkAllMissing = (acc, cur) => acc && cur;

        const noneExist = Object.values(files).map(toFileMissingBool).reduce(checkAllMissing);

        if(noneExist) {
            console.log(`Detected new components: ${name}, ${path}`);

            Object.entries(files).forEach(([type, fileName]) => {
                // @ts-ignore
                writeFile(fileName, templates[type](name));
            })
        }

    }
}
// @ts-ignore
const watch = chokidar.watch("./components/**", { ignored: /node_modules/ }).on("addDir", (path, event) => {
    const name = path.replace(/.*\//, "");
    const goodToGo = /^[^\/_]*$/.test(name);
    console.log(goodToGo, name, path);
    if(goodToGo) createFiles(path, name);
})