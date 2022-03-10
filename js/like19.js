var h54 = document.getElementById("numb19");
var h55 = document.getElementById("heart37");
var h56 = document.getElementById("heart38");
var n37 = document.getElementById("heart37").value;
var n38 = document.getElementById("heart38").value;

h53.style.display = "none";
function heart37() {

    var h54 = document.getElementById("numb19").innerHTML;
    h54++;
    document.getElementById("numb19").innerHTML = h54;

    h55.style.display = "none";
    h53.style.display = "block";
    h53.style.color = "rgb(226, 100, 100)";

    $.ajax({
        url: 'like_count19.jsp',
        type: 'POST',
        data: {
            "param37": h54,
            "param38": n17,
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
function heart38() {
    var h54 = document.getElementById("numb19").innerHTML;
    h54--;
    document.getElementById("numb19").innerHTML = h54;
    h55.style.display = "block";
    h53.style.display = "none";
    h53.style.color = "#000";

    $.ajax({
        url: 'like_count19.jsp',
        type: 'POST',
        data: {
            "param37": h54,
            "param38": n38,
        },
        success: function (data) {
            console.log(data);
        },
        error: function (XMLHttpRequest, status, error) {
            console.log(error)
        }
    })
}


