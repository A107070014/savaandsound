var h27 = document.getElementById("numb10");
var h28 = document.getElementById("heart19");
var h29 = document.getElementById("heart20");
var n19 = document.getElementById("heart19").value;
var n20 = document.getElementById("heart20").value;

h29.style.display = "none";
function heart19() {

    var h27 = document.getElementById("numb10").innerHTML;
    h27++;
    document.getElementById("numb10").innerHTML = h27;

    h28.style.display = "none";
    h29.style.display = "block";
    h29.style.color = "rgb(226, 100, 100)";

    $.ajax({
        url: 'like_count10.jsp',
        type: 'POST',
        data: {
            "param19": h27,
            "param20": n17,
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
function heart20() {
    var h27 = document.getElementById("numb10").innerHTML;
    h27--;
    document.getElementById("numb10").innerHTML = h27;
    h28.style.display = "block";
    h29.style.display = "none";
    h29.style.color = "#000";

    $.ajax({
        url: 'like_count10.jsp',
        type: 'POST',
        data: {
            "param19": h27,
            "param20": n20,
        },
        success: function (data) {
            console.log(data);
        },
        error: function (XMLHttpRequest, status, error) {
            console.log(error)
        }
    })
}


