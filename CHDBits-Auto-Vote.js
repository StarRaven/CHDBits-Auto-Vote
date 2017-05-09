// ==UserScript==
// @name         CHDBits一键候选投票
// @version      1.0
// @description  CHDBits一键候选投票
// @author       StarRaven
// @match        http://chdbits.co/offers.php
// @supportURL   none
// @contributionURL none
// @grant        none
// ==/UserScript==

var zNode       = document.createElement ('div');
zNode.innerHTML = '<button id="myButton" type="button">'
                + 'Vote</button>'
                ;
zNode.setAttribute ('id', 'myContainer');
document.body.insertBefore(zNode,document.body.childNodes[0]);

document.getElementById ("myButton").addEventListener (
    "click", ButtonClickAction, false
);

function sleep(milliSeconds){
    var startTime = new Date().getTime(); // get the current time
    while (new Date().getTime() < startTime + milliSeconds);
}

var allURL = new Array();
var n = 0;

function showUrl(index) {
    index = index || 0;
    if (allURL.length === 0 || index < 0 || index >= allURL.length) {
        return;
    }
    var popup = window.open(allURL[index]);
    setTimeout(function() {
        popup.close();
        showUrl(index + 1);
    }, 3000);
}

function ButtonClickAction (zEvent) {
    var aDom = document.getElementsByTagName("a");
    for(var i=0,len=aDom.length;i<len;i++){
        if ((aDom[i].href).indexOf("vote=yeah")>0){
            //console.log(aDom[i].href);
            allURL[n] = aDom[i].href;
            n++;
        }
    }
    showUrl();
}