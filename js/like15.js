var h42 = document.getElementById("numb15");
var h43 = document.getElementById("heart29");
var h44 = document.getElementById("heart30");
var n29 = document.getElementById("heart29").value;
var n30 = document.getElementById("heart30").value;

h44.style.display = "none";
function heart29() {

    var h42 = document.getElementById("numb15").innerHTML;
    h42++;
    document.getElementById("numb15").innerHTML = h42;

    h43.style.display = "none";
    h44.style.display = "block";
    h44.style.color = "rgb(226, 100, 100)";

    $.ajax({
        url: 'like_count15.jsp',
        type: 'POST',
        data: {
            "param29": h42,
            "param30": n17,
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
function heart30() {
    var h42 = document.getElementById("numb15").innerHTML;
    h42--;
    document.getElementById("numb15").innerHTML = h42;
    h43.style.display = "block";
    h44.style.display = "none";
    h44.style.color = "#000";

    $.ajax({
        url: 'like_count15.jsp',
        type: 'POST',
        data: {
            "param29": h42,
            "param30": n30,
        },
        success: function (data) {
            console.log(data);
        },
        error: function (XMLHttpRequest, status, error) {
            console.log(error)
        }
    })
}


