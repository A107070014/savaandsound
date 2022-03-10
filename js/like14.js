var h39 = document.getElementById("numb14");
var h40 = document.getElementById("heart27");
var h41 = document.getElementById("heart28");
var n27 = document.getElementById("heart27").value;
var n28 = document.getElementById("heart28").value;

h41.style.display = "none";
function heart27() {

    var h39 = document.getElementById("numb14").innerHTML;
    h39++;
    document.getElementById("numb14").innerHTML = h39;

    h40.style.display = "none";
    h41.style.display = "block";
    h41.style.color = "rgb(226, 100, 100)";

    $.ajax({
        url: 'like_count14.jsp',
        type: 'POST',
        data: {
            "param27": h39,
            "param28": n17,
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
function heart28() {
    var h39 = document.getElementById("numb14").innerHTML;
    h39--;
    document.getElementById("numb14").innerHTML = h39;
    h40.style.display = "block";
    h41.style.display = "none";
    h41.style.color = "#000";

    $.ajax({
        url: 'like_count14.jsp',
        type: 'POST',
        data: {
            "param27": h39,
            "param28": n28,
        },
        success: function (data) {
            console.log(data);
        },
        error: function (XMLHttpRequest, status, error) {
            console.log(error)
        }
    })
}


