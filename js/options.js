var firsturl = localStorage.firsturl || '';
var secondurl = localStorage.secondurl || '';
document.getElementById('firsturl').value = firsturl;
document.getElementById('secondurl').value = secondurl;
document.getElementById('save').onclick = function(){
    localStorage.firsturl = document.getElementById('firsturl').value;
    localStorage.secondurl = document.getElementById('secondurl').value;
    localStorage.firstid = 0;
    localStorage.secondid = 0;
    alert('保存成功!');
}
