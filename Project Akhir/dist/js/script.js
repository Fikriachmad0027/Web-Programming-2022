function startlog(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
if(username=="admin"&& password=="admin")
{
    alert("login succesfully");
    return true;
}
else
{
    alert("login failed, please try again");
    return false;
}
}