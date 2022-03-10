var h12 = document.getElementById("numb5");
var h13 = document.getElementById("heart9");
var h14 = document.getElementById("heart10");
var n9 = document.getElementById("heart9").value;
var n10 = document.getElementById("heart10").value;

h14.style.display = "none";
function heart9() {

    var h12 = document.getElementById("numb5").innerHTML;
    h12++;
    document.getElementById("numb5").innerHTML = h12;

    h13.style.display = "none";
    h14.style.display = "block";
    h14.style.color = "rgb(226, 100, 100)";

    $.ajax({
        url: 'like_count5.jsp',
        type: 'POST',
        data: {
            "param9": h12,
            "param10": n9,
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
function heart10() {
    var h12 = document.getElementById("numb5").innerHTML;
    h12--;
    document.getElementById("numb5").innerHTML = h12;
    h13.style.display = "block";
    h14.style.display = "none";
    h14.style.color = "#000";

    $.ajax({
        url: 'like_count5.jsp',
        type: 'POST',
        data: {
            "param9": h12,
            "param10": n10,
        },
        success: function (data) {
            console.log(data);
        },
        error: function (XMLHttpRequest, status, error) {
            console.log(error)
        }
    })
}


