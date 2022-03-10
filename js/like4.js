var h9 = document.getElementById("numb4");
var h10 = document.getElementById("heart7");
var h11 = document.getElementById("heart8");
var n7 = document.getElementById("heart7").value;
var n8 = document.getElementById("heart8").value;

h11.style.display = "none";
function heart7() {

    var h9 = document.getElementById("numb4").innerHTML;
    h9++;
    document.getElementById("numb4").innerHTML = h9;

    h10.style.display = "none";
    h11.style.display = "block";
    h11.style.color = "rgb(226, 100, 100)";

    $.ajax({
        url: 'like_count4.jsp',
        type: 'POST',
        data: {
            "param7": h9,
            "param8": n7,
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
function heart8() {
    var h9 = document.getElementById("numb4").innerHTML;
    h9--;
    document.getElementById("numb4").innerHTML = h9;
    h10.style.display = "block";
    h11.style.display = "none";
    h11.style.color = "#000";

    $.ajax({
        url: 'like_count4.jsp',
        type: 'POST',
        data: {
            "param7": h9,
            "param8": n8,
        },
        success: function (data) {
            console.log(data);
        },
        error: function (XMLHttpRequest, status, error) {
            console.log(error)
        }
    })
}


