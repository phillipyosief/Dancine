console.log('[web.js] loaded')

const checkInternetConnected = require('check-internet-connected');

const useragent = 'useragent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.131 Safari/537.36"'
const webview = document.getElementById('webview')

const default_url = 'tutorial.html'
const offline_url = 'offline.html'

// Change src from webview
function open_url(url) {
    console.log('[web.js] open_url('+url+')')

    const config = {
      timeout: 5000, //timeout connecting to each try (default 5000)
      retries: 3,//number of retries to do before failing (default 5)
      domain: 'google.com'//the domain to check DNS record of
    }

    checkInternetConnected(config)
      .then(() => {
        console.log("[web.js] Connection available");      
        webview.src = url    
      }).catch((err) => {
        console.log("[web.js] No connection", err);
        webview.src = offline_url
      });    
}

// Goes one page back in history (webview)
function GoBack() {
    console.log('[web.js] GoBack()')
    webview.goBack();
}


  

    
// document.getElementById('webview').insertCSS(
//   "ytmusic-app-layout > [slot=player-bar],"+
//   "#player-bar-background.ytmusic-app-layout {"+
//   "background-color: #2a2d32}"+
//   "tp-yt-iron-icon, tp-yt-iron-icon.tp-yt-paper-icon-button, .slider-knob-inner.tp-yt-paper-slider, .slider-knob-inner.tp-yt-paper-slider ,#icon, .style-scope tp-yt-paper-icon-button {"+
//   "color: #d1d3e2}"
//   )


    
