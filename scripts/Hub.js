const App = require('./App.js');


function Hub() {
    let mainWindow = null;
    let config = null;

    let apps = [];

    const initialize = () => {
        // Apps are always initialized before
        const appPaths = config.paths.apps || [];
        for (const appPath of appPaths) {
            App(appPath);

            // openApplication(appPath, manifest);
        }
        
        // Load main screen only after app initialization
        mainWindow.loadFile('index.html');
    };

    openApplication = (appPath, manifest) => {
        mainWindow.loadFile(path.join(appPath, manifest.html));
    };
    
    return {
        init(win, cnfg) {
            if (win === undefined || win === null) {
                throw new Error('Main window is undefined');
            }

            mainWindow = win;
            config = cnfg || {};

            return initialize();
        }
    };
}


module.exports = Hub;
