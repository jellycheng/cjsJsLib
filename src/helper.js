
//判断是否在微信内
function is_weixin(){
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=="micromessenger") {
      return true;
     } else {
      return false;
    }
}

function demoConsoleLog(str) {
    console.log("helper.js demo function....", str)
}

