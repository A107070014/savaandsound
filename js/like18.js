var h51 = document.getElementById("numb18");
var h52 = document.getElementById("heart35");
var h53 = document.getElementById("heart36");
var n35 = document.getElementById("heart35").value;
var n36 = document.getElementById("heart36").value;

h53.style.display = "none";
function heart35() {

    var h51 = document.getElementById("numb18").innerHTML;
    h51++;
    document.getElementById("numb18").innerHTML = h51;

    h52.style.display = "none";
    h53.style.display = "block";
    h53.style.color = "rgb(226, 100, 100)";

    $.ajax({
        url: 'like_count18.jsp',
        type: 'POST',
        data: {
            "param35": h51,
            "param36": n17,
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
function heart36() {
    var h51 = document.getElementById("numb18").innerHTML;
    h51--;
    document.getElementById("numb18").innerHTML = h51;
    h52.style.display = "block";
    h53.style.display = "none";
    h53.style.color = "#000";

    $.ajax({
        url: 'like_count18.jsp',
        type: 'POST',
        data: {
            "param35": h51,
            "param36": n36,
        },
        success: function (data) {
            console.log(data);
        },
        error: function (XMLHttpRequest, status, error) {
            console.log(error)
        }
    })
}


