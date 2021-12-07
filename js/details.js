
// javascript for details.html
const id = new URLSearchParams(window.location.search).get('id');
const email = new URLSearchParams(window.location.search).get('email');
const title = new URLSearchParams(window.location.search).get('title');


$(function () {
  $.getJSON ("https://saveandsound-api.herokuapp.com/users?email=" + email, function (data)
    {
        $.each (data, function (i, item)
        {
            $ ("#disp").append ("<img src="+ item.photo_path.substring(34) +">");
            $ ("#disp").append ("<h4>"+ item.name +"</h4");
        });
    });        
});
$(function () {
  $.getJSON ("https://saveandsound-api.herokuapp.com/posts?id=" + id, function (data)
    {
        $.each (data, function (i, item)
        {
            $ ("#details3").append ("<h2>"+ item.title +"</h2");
            $ ("#details3").append ("<div class=s1><div>"+ item.time +"</div><div>"+ item.category + "</div></div>");
        });
    });        
});

$(function () {
  $.getJSON ("https://saveandsound-api.herokuapp.com/media?title=" + title, function (data)
    {
        $.each (data, function (i, item)
        {
            $ ("#audio").append ("<source src='"+ item.sound_path.substring(34) + "'type=audio/mp3>");
        });
    });        
});
$(function () {
  $.getJSON ("https://saveandsound-api.herokuapp.com/posts?id=" + id, function (data)
    {
        $.each (data, function (i, item)
        {
            $ ("#s").append (item.story);
            //$ ("#heart").appendto (document.getElementById("heart").value=item.id);
            $(document.getElementById("heart").value=item.id).appendTo('#heart');
        });
    });             
});

/*
$(function () {
    $.getJSON ("https://saveandsound-api.herokuapp.com/posts?id=" + id, function (data)
      {
          $.each (data, function (i, item)
          {
              //$ ("#heart2").appendto (document.getElementById("heart2").value=item.id); 
              $(document.getElementById("heart2").value=item.id).appendTo('#heart2');
          });
      });             
  });*/



/*
const renderDetails = async () => {
  const res = await fetch('http://localhost:3000/posts/' + id);
  
  const post = await res.json(); 
  //${post.photo_path.substring(34)} 取得圖片/音檔
  const template = `  
    <h2>${post.title}</h2>
    <div class="s1">
        <div>${post.time}</div>
        <div>${post.category}</div>
    </div>
    <audio controls controlsList="nodownload" id="audio20">
        <source src="upload/貓咪吃肉泥聲音.mp3" type="audio/mp3">
        遇到不支援的瀏覽器會出現這行字
    </audio>
    <div id="s" class="s2">${post.story}</div>
    <div id="s2" class="s4">
        <div class="s5">
            <div class="s6">
                <button  id ="heart" value="25" onclick="return heart()"><i class="fas fa-heart" ></i></button>
                <button  id ="heart2" value="25" onclick="return heart2()"><i class="fas fa-heart" ></i></button>
            </div>
        </div>
        <span id="numb">${post.great}</span>
    </div>
    <form name="myform" id="s2">
        <input id="sendMessage" class="say" type="text" placeholder="請輸入留言..." name="comment">
        <input type="text" value="21" name="no" class="no">
        <i class="fas fa-caret-right"onclick="return take_values()"></i>
    </form>
    <div class="s5">
        <i class="fas fa-comment"></i><span id="numb2">留言數</span>
    </div>
    <div class="sss">
        <div id="s" class="s7">
            <p>留言</p>
            <div class="s8">             
                <!--<div  class="img">
                    <img src="img/ukulele.jpg" alt="music-cover" id="cover" name="picture">   
                </div>-->
                <ul> 
                    <!--<li><p class=s11>名字</p></li>
                    <li><p class=s9>時間</p></li>
                    <li><p class=s10>留言</p></li>-->
                    
                </ul>
            </div>
            <div id="messageBox"></div>
        </div>
    </div>
  `

  container.innerHTML = template;
}

window.addEventListener('DOMContentLoaded', renderDetails);*/



