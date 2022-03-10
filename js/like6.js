var h15 = document.getElementById("numb6");
var h16 = document.getElementById("heart11");
var h17 = document.getElementById("heart12");
var n11 = document.getElementById("heart11").value;
var n12 = document.getElementById("heart12").value;

h17.style.display = "none";
function heart11() {

    var h15 = document.getElementById("numb6").innerHTML;
    h15++;
    document.getElementById("numb6").innerHTML = h15;

    h16.style.display = "none";
    h17.style.display = "block";
    h17.style.color = "rgb(226, 100, 100)";

    $.ajax({
        url: 'like_count6.jsp',
        type: 'POST',
        data: {
            "param11": h15,
            "param12": n11,
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
function heart12() {
    var h15 = document.getElementById("numb6").innerHTML;
    h15--;
    document.getElementById("numb6").innerHTML = h15;
    h16.style.display = "block";
    h17.style.display = "none";
    h17.style.color = "#000";

    $.ajax({
        url: 'like_count6.jsp',
        type: 'POST',
        data: {
            "param11": h15,
            "param12": n12,
        },
        success: function (data) {
            console.log(data);
        },
        error: function (XMLHttpRequest, status, error) {
            console.log(error)
        }
    })
}


