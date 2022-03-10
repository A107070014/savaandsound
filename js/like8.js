var h21 = document.getElementById("numb8");
var h22 = document.getElementById("heart15");
var h23 = document.getElementById("heart16");
var n15 = document.getElementById("heart15").value;
var n16 = document.getElementById("heart16").value;

h23.style.display = "none";
function heart15() {

    var h21 = document.getElementById("numb8").innerHTML;
    h21++;
    document.getElementById("numb8").innerHTML = h21;

    h22.style.display = "none";
    h23.style.display = "block";
    h23.style.color = "rgb(226, 100, 100)";

    $.ajax({
        url: 'like_count8.jsp',
        type: 'POST',
        data: {
            "param15": h21,
            "param16": n15,
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
function heart16() {
    var h21 = document.getElementById("numb8").innerHTML;
    h21--;
    document.getElementById("numb8").innerHTML = h21;
    h22.style.display = "block";
    h23.style.display = "none";
    h23.style.color = "#000";

    $.ajax({
        url: 'like_count8.jsp',
        type: 'POST',
        data: {
            "param15": h21,
            "param16": n16,
        },
        success: function (data) {
            console.log(data);
        },
        error: function (XMLHttpRequest, status, error) {
            console.log(error)
        }
    })
}


