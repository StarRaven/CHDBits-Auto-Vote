// ==UserScript==
// @name         CHDBits一键清空收件箱
// @version      1.0
// @description  CHDBits一键清空收件箱
// @author       StarRaven
// @match        http://chdbits.co/messages.php*
// @github       https://github.com/StarRaven/CHDBits-Auto-Vote.git
// ==/UserScript==

var zNode       = document.createElement ('div');
zNode.innerHTML = '<button id="myButton" type="button" style="width:200px;height:30px;margin-bottom:20px;">'+'一 键 清 空</button>';
zNode.setAttribute ('id', 'myContainer');
var parNode = document.getElementById("outer");
parNode.insertBefore(zNode,parNode.childNodes[0]);

document.getElementById ("myButton").addEventListener (
    "click", ButtonClickAction, false
);

function delCookie(name)
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!==null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}

function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++)
    {
        var c = ca[i].trim();
        if (c.indexOf(name)===0)
            return c.substring(name.length,c.length);
    }
    return "";
}

document.onreadystatechange = continueDelete();
function continueDelete()
{
    if (document.getElementsByTagName("p")[0].textContent=="没有短讯"){
        //console.log(document.cookie);
        delCookie("running");
        //console.log(document.cookie);
        return;
    }
    if(document.readyState == "complete"){
        if (getCookie("running") == "1") {
            var all = document.getElementsByTagName("input");
            var sel;
            var del;
            for (var i=0;i<all.length;i++)
            {
                if (all[i].value =="全选")
                    sel = all[i];
                if (all[i].value =="删除")
                    del = all[i];
            }
            sel.click();
            del.click();
        }
        else {
            return;
        }
    }
}

function ButtonClickAction (zEvent) {
    document.cookie="running="+1;
    var all = document.getElementsByTagName("input");
    var sel;
    var del;
    for (var i=0;i<all.length;i++)
    {
        if (all[i].value =="全选")
            sel = all[i];
        if (all[i].value =="删除")
            del = all[i];
    }
    sel.click();
    del.click();
}







