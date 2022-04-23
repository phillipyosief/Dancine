
var os = require('os');

var os_type = os.type();
var os_release = os.release();
var os_platform = os.platform();
var os_arch = os.arch();
var os_hostname = os.hostname();
var os_uptime = os.uptime();
var os_loadavg = os.loadavg();
var os_totalmem = os.totalmem();
var os_freemem = os.freemem();
var os_cpus = os.cpus();
var os_networkInterfaces = os.networkInterfaces();
var os_EOL = os.EOL;
var os_tmpdir = os.tmpdir();
var os_homedir = os.homedir();
var os_endianness = os.endianness();
var os_release = os.release();

var version = require('../package.json').version;
var name = require('../package.json').name;



console.log('[feedback.js] loaded')

function report_a_bug() {
    // GitHub bug reporting
    console.log('[feedback.js] report_a_bug()'+os_type+os_release+os_platform+os_arch+os_hostname+os_uptime+os_loadavg+os_totalmem+os_freemem+os_cpus+os_networkInterfaces+os_EOL+os_tmpdir+os_homedir+os_endianness+os_release)
    
    var github_url = "https://github.com/philliphqs/"+name
    var github_issue_url = github_url + "/issues/new"

    console.log('[feedback.js] Creating a new issue at '+github_url)

    body = '%23%23%23%23%20Description%0A' + 
           '%23%23%23%23%23%23%20'+'Describe%20here%20your%20problem'+'%0A' +
           '%23%23%23%23%20Environment%0A' +
           '%20*%20'+name+'%0A' +
           '%20*%20'+'Platform:%20'+os_type+'%20|%20'+os_platform+'%0A' +
           '%20*%20'+'Arch:%20'+os_arch+'%0A' +
           '%20*%20OS%20'+'Version:%20'+os_release+'%0A' +
           '%20*%20App%20Version:%20'+version+'%0A'

    var url = github_issue_url + "?body=" + body + '&title=' + "[Bug]" + "&labels=bug"

    console.log('[feedback.js] Opening '+url)
    
    webview.src = url
}



