var h18 = document.getElementById("numb7");
var h19 = document.getElementById("heart13");
var h20 = document.getElementById("heart14");
var n13 = document.getElementById("heart13").value;
var n14 = document.getElementById("heart14").value;

h20.style.display = "none";
function heart13() {

    var h18 = document.getElementById("numb7").innerHTML;
    h18++;
    document.getElementById("numb7").innerHTML = h18;

    h19.style.display = "none";
    h20.style.display = "block";
    h20.style.color = "rgb(226, 100, 100)";

    $.ajax({
        url: 'like_count7.jsp',
        type: 'POST',
        data: {
            "param13": h18,
            "param14": n13,
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
function heart14() {
    var h18 = document.getElementById("numb7").innerHTML;
    h18--;
    document.getElementById("numb7").innerHTML = h18;
    h19.style.display = "block";
    h20.style.display = "none";
    h20.style.color = "#000";

    $.ajax({
        url: 'like_count7.jsp',
        type: 'POST',
        data: {
            "param13": h18,
            "param14": n14,
        },
        success: function (data) {
            console.log(data);
        },
        error: function (XMLHttpRequest, status, error) {
            console.log(error)
        }
    })
}


