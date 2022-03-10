var h30 = document.getElementById("numb11");
var h31 = document.getElementById("heart21");
var h32 = document.getElementById("heart22");
var n21 = document.getElementById("heart21").value;
var n22 = document.getElementById("heart22").value;

h32.style.display = "none";
function heart21() {

    var h30 = document.getElementById("numb11").innerHTML;
    h30++;
    document.getElementById("numb11").innerHTML = h30;

    h31.style.display = "none";
    h32.style.display = "block";
    h32.style.color = "rgb(226, 100, 100)";

    $.ajax({
        url: 'like_count11.jsp',
        type: 'POST',
        data: {
            "param21": h30,
            "param22": n17,
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
function heart22() {
    var h30 = document.getElementById("numb11").innerHTML;
    h30--;
    document.getElementById("numb11").innerHTML = h30;
    h31.style.display = "block";
    h32.style.display = "none";
    h32.style.color = "#000";

    $.ajax({
        url: 'like_count11.jsp',
        type: 'POST',
        data: {
            "param21": h30,
            "param22": n22,
        },
        success: function (data) {
            console.log(data);
        },
        error: function (XMLHttpRequest, status, error) {
            console.log(error)
        }
    })
}


