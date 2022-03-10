var h45 = document.getElementById("numb16");
var h46 = document.getElementById("heart31");
var h47 = document.getElementById("heart32");
var n31 = document.getElementById("heart31").value;
var n32 = document.getElementById("heart32").value;

h47.style.display = "none";
function heart31() {

    var h45 = document.getElementById("numb16").innerHTML;
    h45++;
    document.getElementById("numb16").innerHTML = h45;

    h46.style.display = "none";
    h47.style.display = "block";
    h47.style.color = "rgb(226, 100, 100)";

    $.ajax({
        url: 'like_count16.jsp',
        type: 'POST',
        data: {
            "param31": h45,
            "param32": n17,
        },
        success: function (data) {
            console.log(data);
        },
        error: function (XMLHttpRequest, status, error) {
            console.log(error)
        }
    })
    http.onload = function () {
        alert(http.responseText);
    }
}
function heart32() {
    var h45 = document.getElementById("numb16").innerHTML;
    h45--;
    document.getElementById("numb16").innerHTML = h45;
    h46.style.display = "block";
    h47.style.display = "none";
    h47.style.color = "#000";

    $.ajax({
        url: 'like_count16.jsp',
        type: 'POST',
        data: {
            "param31": h45,
            "param32": n32,
        },
        success: function (data) {
            console.log(data);
        },
        error: function (XMLHttpRequest, status, error) {
            console.log(error)
        }
    })
}


