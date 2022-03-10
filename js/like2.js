var h3=document.getElementById("numb2");
var h4=document.getElementById("heart3");
var h5=document.getElementById("heart4");
var n3=document.getElementById("heart3").value;
var n4=document.getElementById("heart4").value;

h5.style.display="none";
function heart3(){
    
    var h3=document.getElementById("numb2").innerHTML;
    h3++;
    document.getElementById("numb2").innerHTML=h3;
    
    h4.style.display="none";  
    h5.style.display="block";
    h5.style.color="rgb(226, 100, 100)";
    
    $.ajax({
        url: 'like_count2.jsp',
        type: 'POST',
        data: {
            "param3":h3,
            "param4":n3,
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
function heart4(){
    var h3=document.getElementById("numb2").innerHTML;
    h3--;
    document.getElementById("numb2").innerHTML=h3;
    h4.style.display="block";
    h5.style.display="none";
    h5.style.color="#000";
    
    $.ajax({
        url: 'like_count2.jsp',
        type: 'POST',
        data: {
            "param3":h3,
            "param4":n4,
        },
        success: function(data) {
            console.log(data);
        },
        error: function(XMLHttpRequest, status, error) {
            console.log(error)
        }
    })
} 


