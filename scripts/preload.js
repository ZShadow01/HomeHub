const { contextBridge, ipcRenderer } = require('electron');


contextBridge.exposeInMainWorld('hub', {
    emit: (arg) => ipcRenderer.invoke('event', arg),
    register: (eventName, listener) => ipcRenderer.on(eventName, listener)
});
