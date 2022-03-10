var h24 = document.getElementById("numb9");
var h25 = document.getElementById("heart17");
var h26 = document.getElementById("heart18");
var n17 = document.getElementById("heart17").value;
var n18 = document.getElementById("heart18").value;

h26.style.display = "none";
function heart17() {

    var h24 = document.getElementById("numb9").innerHTML;
    h24++;
    document.getElementById("numb9").innerHTML = h24;

    h25.style.display = "none";
    h26.style.display = "block";
    h26.style.color = "rgb(226, 100, 100)";

    $.ajax({
        url: 'like_count9.jsp',
        type: 'POST',
        data: {
            "param17": h24,
            "param18": n17,
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
function heart18() {
    var h24 = document.getElementById("numb9").innerHTML;
    h24--;
    document.getElementById("numb9").innerHTML = h24;
    h25.style.display = "block";
    h26.style.display = "none";
    h26.style.color = "#000";

    $.ajax({
        url: 'like_count9.jsp',
        type: 'POST',
        data: {
            "param17": h24,
            "param18": n18,
        },
        success: function (data) {
            console.log(data);
        },
        error: function (XMLHttpRequest, status, error) {
            console.log(error)
        }
    })
}


