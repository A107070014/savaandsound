        var h=document.getElementById("numb");
        var h1=document.getElementById("heart");
        var h2=document.getElementById("heart2");
        
        h2.style.display="none";
        function heart(){
            var h=document.getElementById("numb").innerHTML;
            h++;
            document.getElementById("numb").innerHTML=h;
            
            
            h1.style.display="none";  
            h2.style.display="block";
            h2.style.color="rgb(226, 100, 100)";

            var http = new XMLHttpRequest();
            http.open("POST", "http://127.0.0.1/saveandsound/like_count.jsp", true);
            http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            var params = "param1=" + h; // probably use document.getElementById(...).value
            http.send(params);
        } 
        function heart2(){
            var h=document.getElementById("numb").innerHTML;
            h--;
            document.getElementById("numb").innerHTML=h;
            h1.style.display="block";
            h2.style.display="none";
            h2.style.color="#000";
            

            var http = new XMLHttpRequest();
            http.open("POST", "http://127.0.0.1/saveandsound/like_count.jsp", true);
            http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            var params = "param1=" + h; // probably use document.getElementById(...).value
            http.send(params);
        } 

        