// ==UserScript==
// @name         CHDBits一键候选投票
// @version      2.0
// @description  CHDBits一键候选投票
// @author       StarRaven
// @match        http://chdbits.co/offers.php
// @github       https://github.com/StarRaven/CHDBits-Auto-Vote.git
// ==/UserScript==

var zNode       = document.createElement ('div');
zNode.innerHTML = '<button id="myButton" type="button" style="width:200px;height:30px;margin-bottom:20px;">'+'自 动 投 票</button>';
zNode.setAttribute ('id', 'myContainer');
var parNode = document.getElementById("outer");
parNode.insertBefore(zNode,parNode.childNodes[0]);

document.getElementById ("myButton").addEventListener (
    "click", ButtonClickAction, false
);

var allURL = [];
var n = 0;

function showUrl(index) {
    index = index || 0;
    if (allURL.length === 0 || index < 0 || index >= allURL.length) {
        return;
    }
    var popup = window.open(allURL[index]);
    popup.onload = function() {
        var status = popup.document.getElementsByTagName('p')[0].innerHTML;
        //console.log(status);
        if (status == "你已经投过票，每个候选只能投一次。"){
            popup.close();
            return;
        }
        popup.close();
        showUrl(index + 1);
    };
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



