var p=document.getElementById("loginBtn");
var userName=document.getElementById("userName1").value;
var a=document.getElementById("uname");
p.onclick=function()
{
    var value = document.getElementById('userName1').value;//重点在此
    a.innerHTML='<i class="material-icons left">perm_identity</i>'+value;
}
