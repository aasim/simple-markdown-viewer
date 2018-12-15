// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path') // https://nodejs.org/api/path.html
const url = require('url') // https://nodejs.org/api/url.html

global.sharedObject = {prop: process.argv}

app.once('ready', () => {
  // Create a new window
  window = new BrowserWindow({
    // Set the initial width to 400px
    width: 400,
    // Set the initial height to 500px
    height: 500,
    // Don't show the window until it ready, this prevents any white flickering
    show: false,
    // Don't allow the window to be resized.
    resizable: true,
    // Don't show the window frame
    frame: false
  })

  // Load a URL in the window to the local index.html path
  window.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Hide menubar
  window.setMenu(null)

  // window.webContents.openDevTools()

  // Show window when page is ready
  window.once('ready-to-show', () => {
    window.show()
  })
})
