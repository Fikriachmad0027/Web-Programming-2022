function changeimg() {
    var y = document.getElementById("selectId").value;
    var x = document.getElementById("image").src = "Asset/image/" + y;
    alert(y);
}