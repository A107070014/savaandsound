var h48 = document.getElementById("numb17");
var h49 = document.getElementById("heart33");
var h50 = document.getElementById("heart34");
var n33 = document.getElementById("heart33").value;
var n34 = document.getElementById("heart34").value;

h50.style.display = "none";
function heart33() {

    var h48 = document.getElementById("numb17").innerHTML;
    h48++;
    document.getElementById("numb17").innerHTML = h48;

    h49.style.display = "none";
    h50.style.display = "block";
    h50.style.color = "rgb(226, 100, 100)";

    $.ajax({
        url: 'like_count17.jsp',
        type: 'POST',
        data: {
            "param33": h48,
            "param34": n17,
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
function heart34() {
    var h48 = document.getElementById("numb17").innerHTML;
    h48--;
    document.getElementById("numb17").innerHTML = h48;
    h49.style.display = "block";
    h50.style.display = "none";
    h50.style.color = "#000";

    $.ajax({
        url: 'like_count17.jsp',
        type: 'POST',
        data: {
            "param33": h48,
            "param34": n34,
        },
        success: function (data) {
            console.log(data);
        },
        error: function (XMLHttpRequest, status, error) {
            console.log(error)
        }
    })
}


