const fs = require('fs');
const path = require('path');


function App(appPath) {
    if (!fs.existsSync(appPath)) {
        throw new Error("Could not find application " + appPath);
    }

    const manifestPath = path.join(appPath, 'manifest.json');
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

    console.log(manifest);    

    return {
        getManifest() {
            return manifest;
        }
    };
}


module.exports = App;
