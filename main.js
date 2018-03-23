const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

let win

function createWindow() {
    win = new BrowserWindow({
        width: 800, height: 600,
        titleBarStyle: 'hidden',
        show: false, frame: false
    })

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'pet.html'),
        protocol: 'file:',
        slashes: true
    }))

    win.once('ready-to-show', () => {
        win.show()
    })
}

app.on('ready', createWindow)