document.getElementById('option').onclick = function(){
  chrome.tabs.getSelected(function (tab) {
  //Your code below...
  var myNewUrl = "chrome-extension://coejijnjmafbceeobcjfbmbaoffhfppf/options.html";
  //Update the url here.
  chrome.tabs.update(tab.id, {url: myNewUrl});
  //info(myNewUrl);
});
}
function info(firsturl){
    var firstid = -1;
    var secondid = -1;
    document.getElementById("info").innerHTML = firsturl;
    if (!(firsturltoint.get(firsturl) === undefined)){
        firstid = firsturltoint.get(firsturl);
    }

    if (!(secondurltoint.get(firsturl) === undefined)){
        secondid = secondurltoint.get(firsturl);
    }

//    callback(firstid, secondid);
}

function showinfo(firstid, secondid){
    var table1 = "<h2>第一集合id"+firstid+"/"+firsturllist.length+"</h2><br/>";
    var table2 = "<h2>第二集合id"+secondid+"/"+firsturllist.length+"</h2><br/>";
    var table3 = "";
   // var table3 = firsturl;

    document.getElementById("info").innerHTML = table1+table2+table3;

}

var firsturl = localStorage.firsturl;
var firsturllist = firsturl.split("\n");
var firsturltoint = new Map();
for (var i = 1; i<=firsturllist.length; i++)
{
    firsturltoint.set(firsturllist[i-1], i);
}
var secondurl = localStorage.secondurl;
var secondurllist = secondurl.split("\n");
var secondurltoint = new Map();
for (var i = 1; i<=secondurllist.length; i++) {
    secondurltoint.set(secondurllist[i-1], i);
}
var url = ""
chrome.tabs.getSelected(null, function(tab) {
     url = tab.url;
    //info(url,showinfo);
});;
var firstid = new Number(localStorage.firstid);
var secondid = new Number(localStorage.secondid);
showinfo(firstid, secondid);

document.getElementById('fn').onclick = function(){
if(firstid+1<=firsturllist.length){
  chrome.tabs.getSelected(function (tab) {
  //Your code below...
  var myNewUrl = firsturllist[firstid+1];
  //Update the url here.
  chrome.tabs.update(tab.id, {url: myNewUrl});
  localStorage.firstid = firstid+1+"";
  //info(myNewUrl);
});
}
}
document.getElementById('fp').onclick = function(){
if(firstid-1 >= 0)
  chrome.tabs.getSelected(function (tab) {
  //Your code below...
  var myNewUrl = firsturllist[firstid-1];
  //Update the url here.
  chrome.tabs.update(tab.id, {url: myNewUrl});
  localStorage.firstid = firstid-1+"";
  //info(myNewUrl);
});
}
document.getElementById('sn').onclick = function(){
if(secondid+1<=secondurllist.length)
  chrome.tabs.getSelected(function (tab) {
  //Your code below...
  var myNewUrl = secondurllist[secondid+1];
  //Update the url here.
  chrome.tabs.update(tab.id, {url: myNewUrl});
  localStorage.secondid = secondid+1+"";
  //info(myNewUrl);
});
}
document.getElementById('sp').onclick = function(){
    if(secondid-1 >= 0)
  chrome.tabs.getSelected(function (tab) {
  //Your code below...
  var myNewUrl = secondurllist[secondid-1];
  //Update the url here.
  chrome.tabs.update(tab.id, {url: myNewUrl});
  localStorage.secondid = secondid-1+"";
  //info(myNewUrl);
});
}
