        var h=document.getElementById("numb");
        var h1=document.getElementById("heart");
        var h2=document.getElementById("heart2");
        var n=document.getElementById("heart").value;
        var n2=document.getElementById("heart2").value;


        
        h2.style.display="none";
        function heart(){
            
            var h=document.getElementById("numb").innerHTML;
            h++;
            document.getElementById("numb").innerHTML=h;
            
            h1.style.display="none";  
            h2.style.display="block";
            h2.style.color="rgb(226, 100, 100)";
            
            $.ajax({
                url: 'like_count.jsp',
                type: 'POST',
                data: {
                    "param1":h,
                    "param2":n,
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
        function heart2(){
            var h=document.getElementById("numb").innerHTML;
            h--;
            document.getElementById("numb").innerHTML=h;
            h1.style.display="block";
            h2.style.display="none";
            h2.style.color="#000";
            
            $.ajax({
                url: 'like_count.jsp',
                type: 'POST',
                data: {
                    "param1":h,
                    "param2":n2,
                },
                success: function(data) {
                    console.log(data);
                },
                error: function(XMLHttpRequest, status, error) {
                    console.log(error)
                }
            })
        } 

        
        