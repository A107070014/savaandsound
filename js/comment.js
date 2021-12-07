
//留言區
var myDate = new  Date();
var email2 = '<%=session.getAttribute("EMAIL")%>';

function take_values(){
    var comment=document.querySelector(".say").value;
    var no=document.querySelector(".no").value;   
    if (comment==null || comment=="") {
        alert("請輸入留言");
        return false;
    }else{    
        $.ajax({
            url: 'comment.jsp',
            type: 'POST',
            data: {
                "comment": comment,
                "no": no,
                "time": myDate.toLocaleString()
            },
            success: function(data) {
                console.log(data);
            },
            error: function(XMLHttpRequest, status, error) {
                console.log(error)
            }
        })
        $(function () {
        $.getJSON ("https://saveandsound-api.herokuapp.com/users?email=" + email2, function (data)
            {
                $.each (data, function (i, item)
                {
                    $ ("#img").append ("<img src="+ item.photo_path.substring(34) +">");
                    $ ("#s11").append (item.name);
                });
            });        
        });        
        document.getElementById("sendMessage").value='';
        document.getElementById("s10").innerHTML= comment;
        document.getElementById("s9").innerHTML = myDate.toLocaleString();           
    } 
} 
