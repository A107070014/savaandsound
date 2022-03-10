var h6=document.getElementById("numb3");
var h7=document.getElementById("heart5");
var h8=document.getElementById("heart6");
var n5=document.getElementById("heart5").value;
var n6=document.getElementById("heart6").value;

h8.style.display="none";
function heart5(){
    
    var h6=document.getElementById("numb3").innerHTML;
    h6++;
    document.getElementById("numb3").innerHTML=h6;
    
    h7.style.display="none";  
    h8.style.display="block";
    h8.style.color="rgb(226, 100, 100)";
    
    $.ajax({
        url: 'like_count3.jsp',
        type: 'POST',
        data: {
            "param5":h6,
            "param6":n5,
        },
        success: function(data) {
            console.log(data);
        },
        error: function(XMLHttpRequest, status, error) {
            console.log(error)
        }
    })
    http.onload = function() {
        alert(http.responseText);
    }
} 
function heart6(){
    var h6=document.getElementById("numb3").innerHTML;
    h6--;
    document.getElementById("numb3").innerHTML=h6;
    h7.style.display="block";
    h8.style.display="none";
    h8.style.color="#000";
    
    $.ajax({
        url: 'like_count3.jsp',
        type: 'POST',
        data: {
            "param5":h6,
            "param6":n6,
        },
        success: function(data) {
            console.log(data);
        },
        error: function(XMLHttpRequest, status, error) {
            console.log(error)
        }
    })
} 


