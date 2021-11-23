function take_values(){
    var n=document.forms["myform"]["name"].value;
    if (n==null || n=="") {
        alert("Please enter User Comment");
        return false;
    }else{
        var http = new XMLHttpRequest();
        http.open("POST", "http://127.0.0.1/saveandsound/input.jsp", true);
        http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        var params = "param1=" + n; // probably use document.getElementById(...).value
        http.send(params);
        document.getElementById("sendMessage").value='';
        document.getElementById("messageBox").innerHTML=n;
        http.onload = function() {
            alert(http.responseText);
        }
    } 
} 