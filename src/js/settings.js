console.log('[settings.js] loaded')

var fs = require('fs');

function set_default_service(url) {
    console.log('[settings.js] set_default_service('+url+')')
    fs.writeFile('src/default_service', url, function (err) {
        if (err) throw err;
        console.log('[settings.js] default_service saved');
      });

    document.getElementById('setting_default_service_text').innerHTML = '<div id="setting_default_service_text" style="font-size: 13px; text-align: left;">Current streaming service: '+url+'</div>';

    // document.getElementById('setting_default_service_text').innerHTML = '<meta http-equiv="refresh" content="0; url="tutorial.html" />';
    

}


