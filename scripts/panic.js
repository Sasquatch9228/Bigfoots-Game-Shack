

!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var i=e();for(var s in i)("object"==typeof exports?exports:t)[s]=i[s]}}(this,function(){return function(t){function e(s){if(i[s])return i[s].exports;var o=i[s]={exports:{},id:s,loaded:!1};return t[s].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){t.exports=i(2)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,s,o="active",n="idle",r="hidden",u=void 0;!function(t){function e(t,e){r[t]||(r[t]=[]),r[t].push(e)}function i(t,e){r[t]&&r[t].forEach(function(t){t.apply(void 0,e)})}function s(t,e){r[t]&&(r[t]=r[t].filter(function(t){return e!==t}))}function o(t,e,i){return n||(n=t.addEventListener?function(t,e,i){return t.addEventListener(e,i,!1)}:"function"==typeof t.attachEvent?function(t,e,i){return t.attachEvent("on"+e,i,!1)}:function(t,e,i){return t["on"+e]=i}),n(t,e,i)}var n,r={};t.attach=e,t.fire=i,t.remove=s,t.dom=o}(s=e.Events||(e.Events={}));var d=function(){function t(t,e,i){var s=this;this.ifvisible=t,this.seconds=e,this.callback=i,this.stopped=!1,this.start(),this.ifvisible.on("statusChanged",function(t){s.stopped===!1&&(t.status===o?s.start():s.pause())})}return t.prototype.start=function(){this.stopped=!1,clearInterval(this.token),this.token=setInterval(this.callback,1e3*this.seconds)},t.prototype.stop=function(){this.stopped=!0,clearInterval(this.token)},t.prototype.resume=function(){this.start()},t.prototype.pause=function(){this.stop()},t}();e.Timer=d,e.IE=function(){for(var t,e=3,i=document.createElement("div"),s=i.getElementsByTagName("i");i.innerHTML="<!--[if gt IE "+ ++e+"]><i></i><![endif]-->",s[0];);return e>4?e:t}();var a=function(){function t(t,e){var n=this;if(this.root=t,this.doc=e,this.status=o,this.VERSION="2.0.11",this.timers=[],this.idleTime=3e4,this.isLegacyModeOn=!1,void 0!==this.doc.hidden?(i="hidden",u="visibilitychange"):void 0!==this.doc.mozHidden?(i="mozHidden",u="mozvisibilitychange"):void 0!==this.doc.msHidden?(i="msHidden",u="msvisibilitychange"):void 0!==this.doc.webkitHidden&&(i="webkitHidden",u="webkitvisibilitychange"),void 0===i)this.legacyMode();else{var r=function(){n.doc[i]?n.blur():n.focus()};r(),s.dom(this.doc,u,r)}this.startIdleTimer(),this.trackIdleStatus()}return t.prototype.legacyMode=function(){var t=this;if(!this.isLegacyModeOn){var i="blur",o="focus";e.IE<9&&(i="focusout"),s.dom(this.root,i,function(){return console.log("blurred"),t.blur()}),s.dom(this.root,o,function(){return t.focus()}),this.isLegacyModeOn=!0}},t.prototype.startIdleTimer=function(t){var e=this;t instanceof MouseEvent&&0===t.movementX&&0===t.movementY||(this.timers.map(clearTimeout),this.timers.length=0,this.status===n&&this.wakeup(),this.idleStartedTime=+new Date,this.timers.push(setTimeout(function(){if(e.status===o||e.status===r)return e.idle()},this.idleTime)))},t.prototype.trackIdleStatus=function(){s.dom(this.doc,"mousemove",this.startIdleTimer.bind(this)),s.dom(this.doc,"mousedown",this.startIdleTimer.bind(this)),s.dom(this.doc,"keyup",this.startIdleTimer.bind(this)),s.dom(this.doc,"touchstart",this.startIdleTimer.bind(this)),s.dom(this.root,"scroll",this.startIdleTimer.bind(this)),this.focus(this.startIdleTimer.bind(this))},t.prototype.on=function(t,e){return s.attach(t,e),this},t.prototype.off=function(t,e){return s.remove(t,e),this},t.prototype.setIdleDuration=function(t){return this.idleTime=1e3*t,this.startIdleTimer(),this},t.prototype.getIdleDuration=function(){return this.idleTime},t.prototype.getIdleInfo=function(){var t,e=+new Date;if(this.status===n)t={isIdle:!0,idleFor:e-this.idleStartedTime,timeLeft:0,timeLeftPer:100};else{var i=this.idleStartedTime+this.idleTime-e;t={isIdle:!1,idleFor:e-this.idleStartedTime,timeLeft:i,timeLeftPer:parseFloat((100-100*i/this.idleTime).toFixed(2))}}return t},t.prototype.idle=function(t){return t?this.on("idle",t):(this.status=n,s.fire("idle"),s.fire("statusChanged",[{status:this.status}])),this},t.prototype.blur=function(t){return t?this.on("blur",t):(this.status=r,s.fire("blur"),s.fire("statusChanged",[{status:this.status}])),this},t.prototype.focus=function(t){return t?this.on("focus",t):this.status!==o&&(this.status=o,s.fire("focus"),s.fire("wakeup"),s.fire("statusChanged",[{status:this.status}])),this},t.prototype.wakeup=function(t){return t?this.on("wakeup",t):this.status!==o&&(this.status=o,s.fire("wakeup"),s.fire("statusChanged",[{status:this.status}])),this},t.prototype.onEvery=function(t,e){return new d(this,t,e)},t.prototype.now=function(t){return void 0!==t?this.status===t:this.status===o},t}();e.IfVisible=a},function(t,e,i){(function(t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(1),o="object"==typeof self&&self.self===self&&self||"object"==typeof t&&t.global===t&&t||this;e.ifvisible=new s.IfVisible(o,document)}).call(e,function(){return this}())}])});


  /*Autofocus without scroll
document.querySelector("#userinput").focus({
  preventScroll: true
});*/

const image_preview = document.getElementById("image-preview");
const console_output = document.getElementById("console-output");

//Change tabTitle
const changeTabTitle = () => {
  const newtitle = document.getElementById("userinput");
  if (newtitle.value == ""){ //check if the input is blank when they submit
      window.localStorage.removeItem("title");
      window.document.title = "Bigfoot's Game Shack"
      document.getElementById("console-output").style.color = "red"; //error = red
      console_output.innerText = "No title entered. Default applied" //return output successful
  } else {
      window.localStorage.setItem("title", newtitle.value);
      window.document.title = newtitle.value; //Set window's title to userinput
      document.getElementById("console-output").style.color = "green"; //reset output's color to green
      console_output.innerText = "Title change successful" //return output successful
  }
  newtitle.value = ""; //clear input
};

//Change the tabIcon
const changeTabIcon = () => {
  const newfavicon = document.getElementById("userinput");
  if (validURL(newfavicon.value)){
      document.querySelector("link[rel*='icon']").href = newfavicon.value;
      window.localStorage.setItem("icon", newfavicon.value);
      document.getElementById("console-output").style.color = "green";
      console_output.innerText = "Icon change successful"
  } else {
      document.getElementById("console-output").style.color = "red";
      console_output.innerText = "Icon change failed. Make sure you are using a valid URL"
  }
  newfavicon.value = ""; //clear input
};

//URL Validation Regex
const validURL = (str) => {
  var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  var regex = new RegExp(expression);
  return !!regex.test(str);
}

//Clears Tab Icon and Title
const resetTabSettings = () => {
  let items = ["icon", "title"];
  items.forEach(item =>
  window.localStorage.removeItem(item));
  document.getElementById("console-output").style.color = "black";
  console_output.innerText = "Resetting..."
  window.location.reload();
};

// Handle Apply buttons

function applyUrl(url, title){
document.getElementById("userinput").value = url;
changeTabIcon();
document.getElementById("userinput").value = title;
changeTabTitle();
document.getElementById("console-output").style.color = "green";
console_output.innerText = "Preset applied successfully!"
}
      
//
const getCode = (e) => {
  e = e || window.event;
  return e.key;
};
const handleKeyPress = (e) => {
  const key = getCode(e);
  if (key == 5) {
    const btn = document.getElementById('iframe');

    const el = document.getElementById('maincode');
    

      if (el.style.display === 'none') {
        el.style.display = 'block';
        btn.style.display = 'none';
        applyUrl('https://bgs.pages.dev/images/logonew.png', "Bigfoot's Game Shack");

      } 
      
      else {
        applyUrl('https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico', 'Class notes - Google Docs');

        el.style.display = 'none';
        btn.style.display = 'block';

      }
    console.log(`Number ${key} was pressed!`);
  }
};
const handleKeyPress1 = (e) => {
  const key = getCode(e);
  if (key == 1) {
    const btn = document.getElementById('iframe1');

    const el = document.getElementById('maincode');
    

      if (el.style.display === 'none') {
        el.style.display = 'block';
        btn.style.display = 'none';
        applyUrl('https://bgs.pages.dev/images/logonew.png', "Bigfoot's Game Shack");

      } 
      
      else {
        applyUrl('https://storage.googleapis.com/operating-anagram-8280/favicon-32x32.png', 'Math Practice | Google Search');

        el.style.display = 'none';
        btn.style.display = 'block';

      }
    console.log(`Number ${key} was pressed!`);
  }
};
const handleKeyPress2 = (e) => {
  const key = getCode(e);
  if (key == 2) {
    blank3();
    console.log(`Number ${key} was pressed!`);
  }
};
const handleKeyPress3 = (e) => {
  const key = getCode(e);
  if (key == 3) {
    opensettings();
    console.log(`Number ${key} was pressed!`);
  }
};
const handleKeyPress4 = (e) => {
  const key = getCode(e);
  if (key == 4) {
    var url = prompt("about:blank tab cloaker! Enter URL Here (example: https://google.com)");if (url == null) {alert('No URL Entered!')} else {location.href="gfiles/gfiles/lanucher/index.html?url="+url;}
    console.log(`Number ${key} was pressed!`);
  }
};






document.addEventListener("keypress", handleKeyPress);
document.addEventListener("keypress", handleKeyPress3);
document.addEventListener("keypress", handleKeyPress1);
document.addEventListener("keypress", handleKeyPress2);
document.addEventListener("keypress", handleKeyPress4);





//IF VISIBLE.JS CODE
ifvisible.setIdleDuration(3);

ifvisible.on("idle", function(){
  // Stop auto updating the live data
  
  console.log('User is Idle');
});
 
ifvisible.on("wakeup", function(){
  // go back updating data
  console.log('User is awake');
});

ifvisible.on("hidden", function(){
  console.log('Tab Was hidden')
});