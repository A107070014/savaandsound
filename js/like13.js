var h36 = document.getElementById("numb13");
var h37 = document.getElementById("heart25");
var h38 = document.getElementById("heart26");
var n25 = document.getElementById("heart25").value;
var n26 = document.getElementById("heart26").value;

h38.style.display = "none";
function heart25() {

    var h36 = document.getElementById("numb13").innerHTML;
    h36++;
    document.getElementById("numb13").innerHTML = h36;

    h37.style.display = "none";
    h38.style.display = "block";
    h38.style.color = "rgb(226, 100, 100)";

    $.ajax({
        url: 'like_count13.jsp',
        type: 'POST',
        data: {
            "param25": h36,
            "param26": n17,
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
function heart26() {
    var h36 = document.getElementById("numb13").innerHTML;
    h36--;
    document.getElementById("numb13").innerHTML = h36;
    h37.style.display = "block";
    h38.style.display = "none";
    h38.style.color = "#000";

    $.ajax({
        url: 'like_count13.jsp',
        type: 'POST',
        data: {
            "param25": h36,
            "param26": n26,
        },
        success: function (data) {
            console.log(data);
        },
        error: function (XMLHttpRequest, status, error) {
            console.log(error)
        }
    })
}


