function validateForm() {
    var nama = document.forms["formPendaftaran"]["nama"].value;
    var email = document.forms["formPendaftaran"]["email"].value;
    var jam = document.forms["formPendaftaran"]["time"].value;
    var tujuanV = document.forms["formPendaftaran"]["tujuan"].value;
    var jumlah = document.forms["formPendaftaran"]["jumlah"].value;


    var number = /^[0-9]+$/;
    if (nama == "") {
        alert("tidak boleh kosong");
        document.forms["formPendaftaran"]["nama"].focus();
        return false;
    }
    if (email == "") {
        alert("");
        document.forms["formPendaftaran"]["email"].focus();
        return false;
    }
    if (jam == "") {
        alert("");
        document.forms["formPendaftaran"]["jam"].focus();
        return false;
    }
    if (tujuanV == "") {
        alert("");
        document.forms["formPendaftaran"]["tujuan"].focus();
        return false;
    }
    if (jumlah == "" && !jumlah.match(number)) {
        alert("");
        document.forms["formPendaftaran"]["jumlah"].focus();
        return false;
    } else {


        document.getElementById("g").innerHTML = "Nama : " + document.forms["formPendaftaran"]["nama"].value;
        document.getElementById("g1").innerHTML = "Email : " + document.forms["formPendaftaran"]["email"].value;
        document.getElementById("g2").innerHTML = "Jam Keberangkatan : " + document.forms["formPendaftaran"]["time"].value;
        document.getElementById("g3").innerHTML = "Tujuan Keberangkatan : " + document.forms["formPendaftaran"]["tujuan"].value;
        document.getElementById("g4").innerHTML = "Jumlah tiket : " + document.forms["formPendaftaran"]["jumlah"].value;
        return false;
    }


}

function refreshF() {
    location.reload();
}