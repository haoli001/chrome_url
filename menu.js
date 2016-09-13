var firsturl = localStorage.firsturl;
var firsturllist = firsturl.split("\n");
var secondurl = localStorage.secondurl;
var secondurllist = secondurl.split("\n");
function genericOnClick1(info, tab) {
var firstid = new Number(localStorage.firstid);
var secondid = new Number(localStorage.secondid);
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
function genericOnClick2(info, tab) {
var firstid = new Number(localStorage.firstid);
var secondid = new Number(localStorage.secondid);

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
chrome.contextMenus.create({"title": "set1 next","contexts":["all"],"onclick":genericOnClick1});
chrome.contextMenus.create({"title": "set2 next","contexts":["all"],"onclick":genericOnClick2});
