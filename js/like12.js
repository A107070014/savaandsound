var h33 = document.getElementById("numb12");
var h34 = document.getElementById("heart23");
var h35 = document.getElementById("heart24");
var n23 = document.getElementById("heart23").value;
var n24 = document.getElementById("heart24").value;

h35.style.display = "none";
function heart23() {

    var h33 = document.getElementById("numb12").innerHTML;
    h33++;
    document.getElementById("numb12").innerHTML = h33;

    h34.style.display = "none";
    h35.style.display = "block";
    h35.style.color = "rgb(226, 100, 100)";

    $.ajax({
        url: 'like_count12.jsp',
        type: 'POST',
        data: {
            "param23": h33,
            "param24": n17,
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
function heart24() {
    var h33 = document.getElementById("numb12").innerHTML;
    h33--;
    document.getElementById("numb12").innerHTML = h33;
    h34.style.display = "block";
    h35.style.display = "none";
    h35.style.color = "#000";

    $.ajax({
        url: 'like_count12.jsp',
        type: 'POST',
        data: {
            "param23": h33,
            "param24": n24,
        },
        success: function (data) {
            console.log(data);
        },
        error: function (XMLHttpRequest, status, error) {
            console.log(error)
        }
    })
}


