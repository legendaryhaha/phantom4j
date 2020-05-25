system = require('system')   
address = system.args[1];  //获得命令行第二个参数 接下来会用到   
var page = require('webpage').create();   
var url = address;   
page.open(url, function (status) {   
    // Page is loaded!   
    if (status !== 'success') {   
        console.log('Unable to post!');   
    } else {     
        console.log(page.content);   
    }      
    phantom.exit();   
});