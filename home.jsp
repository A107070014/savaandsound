<!DOCTYPE html>
<html lang="zh-TW">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="theme-color" content="#3B1E1E"/>
<meta name="supported-color-schemes" content="light"/>
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
<link rel="stylesheet" href="css/style.css" type="text/css">
<link rel="stylesheet" href="css/tags.css" type="text/css">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css">
<link rel="stylesheet" href="css/music.css">

<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>
<!--<link href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">-->
<script src="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="https://kit.fontawesome.com/427ec671a2.js" crossorigin="anonymous"></script>
<script src="js/story.js"></script>
<title>留聲跡</title>
<link rel="icon" href="img/logo.png" type="image/x-icon">
<!-- google 正體中文字型 -->
<link href="https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap" rel="stylesheet">
<%@ page contentType="text/html;charset=utf-8" import="java.util.*,java.sql.*" %>
</head>
<body>    
    <!--登入-->
    <div id="fade" class="black_overlay" ></div>
    <!--標題列-->
    <nav>
        <div class="logo">
            <div class="picture">
                <i class="fas fa-bars"></i>
                <a title="留聲跡" href="home.html">
                    <img src="img/logo.png" alt="留聲跡" width="50" height="50" >
                </a>
            </div>
            <div class="logoname">
                <a title="留聲跡" href="home.html">
                    <b><span class="logoname">留聲跡</span></b>
                </a>
            </div>   
        </div>
        <div class="search">
            <div class="key">
                <form action="">
                    <input type="search" placeholder="搜尋 聲音故事" aria-label="搜尋" name="query" value="" class="searchbox" size="50" />
                    <button type="submit" title="搜尋" class="searchbutton" style="cursor:pointer">
                        <i class="fas fa-search"></i>  
                    </button>
                </form>
            </div>
        </div>
        
        <div class="tool">
            <div>
                <a href = "javascript:void(0)" onclick = "document.getElementById('article').style.display='block';document.getElementById('fade').style.display='block'"
                id="tool" class="postw" title="發文" style="cursor: pointer;">發文
                </a>
            </div>
            <div>
                <a id="tool" class="game" title="小遊戲" role="button" href="game.html">小遊戲</a>
            </div>
            <div >
                <a id="tool" class="mysound" title="我的聲跡" role="button" href="mysound.html">我的聲跡</a>
            </div>
            <div style="-webkit-tap-highlight-color:rgba(0,0,0,0)" onclick="return true">               
                <div class="inform-menu-style dropdown-menu">
                    <span tabindex="0" onclick="return true">
                        <a id="tool" class="inform" title="通知" role="button" style="cursor: pointer;">
                        通知</a>
                    </span>
                    <div tabindex="0" onclick="return true"></div>
                        <ul>
                            <li><a href="#" onclick="sampleMenu(this)">本週</a></li>
                                <p>本週訊息</p>
                            <li><a href="#" onclick="sampleMenu(this)">本月</a></li>
                                <p>本月訊息</p>
                            <li><a href="#" onclick="sampleMenu(this)">更早之前</a></li>
                                <p>更早之前訊息</p>
                        </ul>
                </div>
            </div>
            <div style="-webkit-tap-highlight-color:rgba(0,0,0,0)" onclick="return true">               
                <div class="another-menu-style dropdown-menu">
                    <span tabindex="0" onclick="return true">
                        <img  id="tool" src="img/another1.png" title="其他" alt="其他" width="25" height="26" style="cursor: pointer;" 
                        onmouseover="this.src='img/another2.png'" onmouseout="this.src='img/another1.png'"/>
                    </span>
                    <div tabindex="0" onclick="return true"></div>
                    <ul>
                        <a href="other_aboutus.html" title="關於我們"><li>關於我們</li></a>
                        <a href="" title="聯絡我們"><li>聯絡我們</li></a>
                        <a href="" title="募資平台"><li>募資平台</li></a>
                        <a href="" title="設定"><li>設定</li></a>
                        <a href="index.html" title="登出"><li>登出</li></a>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    
    <!--分類欄-->
    <div class="row">
        <div class="list-group col-md-4 col-xs-4">
            <h1>聲音故事</h1>
            <a id="tab1" href="#" class="tab list-group-item active">全部</a>
            <a id="tab2" href="#" class="tab list-group-item">自然</a>
            <a id="tab3" href="#" class="tab list-group-item">都市</a>
            <a id="tab4" href="#" class="tab list-group-item">器械</a>
            <a id="tab5" href="#" class="tab list-group-item">人聲</a>
            <a id="tab6" href="#" class="tab list-group-item">懷舊</a>
        </div>
        <div class="my col-md-8 col-xs-4">
            
            <!--全部-->
            <div id="tab-item1" class="tab-item">
                    <span id="tab-1">1</span>
                    <span id="tab-2">2</span>
                    <div id="tab">
                        <ul>
                            <li><a href="#tab-1">熱門</a></li>
                            <li><a href="#tab-2">最新</a></li>
                        </ul>
                        <div class="tab-content-1">
                            <ul>
                                <li>#</li>
                                <li>標題</li>
                                <li>發表者</li>
                                <li>新增日期</li>
                                <li>時長</li>
                            </ul> 
                            <div class="hot">
                                <div>1</div>                               
                                <img src="img/pen.png" alt="" title="" width="30" height="30">
                                <div>
                                    <div>老舊電視聲</div>
                                    <div>李欣玫</div>
                                </div>
                                <div>剛剛</div>
                                <div>00:40</div>
                            </div>                           
                        </div>
                        <div class="tab-content-2">
                            <ul>
                                <li>#</li>
                                <li>標題</li>
                                <li>發表者</li>
                                <li>新增日期</li>
                                <li>時長</li>
                            </ul>  
                            <div class="new">
                                最新...
                            </div>
                        </div>
                    </div>                  
            </div>
            <!--自然-->
            <div id="tab-item2" class="tab-item">
                <span id="tab-3">3</span>
                <span id="tab-4">4</span>
                <div id="tab">
                    <ul>
                        <li><a href="#tab-3" checked>熱門</a></li>
                        <li><a href="#tab-4">最新</a></li>
                    </ul>
                    <div class="tab-content-1">
                        <ul>
                            <li>#</li>
                            <li>標題</li>
                            <li>發表者</li>
                            <li>新增日期</li>
                            <li>時長</li>
                        </ul> 
                        <div class="hot">
                            熱門...
                        </div>                           
                    </div>
                    <div class="tab-content-2">
                        <ul>
                            <li>#</li>
                            <li>標題</li>
                            <li>發表者</li>
                            <li>新增日期</li>
                            <li>時長</li>
                        </ul>  
                        <div class="new">
                            最新...
                        </div>
                    </div>
                </div>                  
            </div>
            <!--都市-->
            <div id="tab-item3" class="tab-item">
                <span id="tab-5">5</span>
                <span id="tab-6">6</span>
                <div id="tab">
                    <ul>
                        <li><a href="#tab-5" checked>熱門</a></li>
                        <li><a href="#tab-6">最新</a></li>
                    </ul>
                    <div class="tab-content-1">
                        <ul>
                            <li>#</li>
                            <li>標題</li>
                            <li>發表者</li>
                            <li>新增日期</li>
                            <li>時長</li>
                        </ul> 
                        <div class="hot">
                            熱門...
                        </div>                           
                    </div>
                    <div class="tab-content-2">
                        <ul>
                            <li>#</li>
                            <li>標題</li>
                            <li>發表者</li>
                            <li>新增日期</li>
                            <li>時長</li>
                        </ul>  
                        <div class="new">
                            最新...
                        </div>
                    </div>
                </div>                  
            </div>
            <!--器械-->
            <div id="tab-item4" class="tab-item">
                <span id="tab-7">7</span>
                <span id="tab-8">8</span>
                <div id="tab">
                    <ul>
                        <li><a href="#tab-7" checked>熱門</a></li>
                        <li><a href="#tab-8">最新</a></li>
                    </ul>
                    <div class="tab-content-1">
                        <ul>
                            <li>#</li>
                            <li>標題</li>
                            <li>發表者</li>
                            <li>新增日期</li>
                            <li>時長</li>
                        </ul> 
                        <div class="hot">
                            熱門...
                        </div>                           
                    </div>
                    <div class="tab-content-2">
                        <ul>
                            <li>#</li>
                            <li>標題</li>
                            <li>發表者</li>
                            <li>新增日期</li>
                            <li>時長</li>
                        </ul>  
                        <div class="new">
                            最新...
                        </div>
                    </div>
                </div>                  
            </div>
            <!--人聲-->
            <div id="tab-item5" class="tab-item">
                <span id="tab-9">9</span>
                <span id="tab-10">10</span>
                <div id="tab">
                    <ul>
                        <li><a href="#tab-9" checked>熱門</a></li>
                        <li><a href="#tab-10">最新</a></li>
                    </ul>
                    <div class="tab-content-1">
                        <ul>
                            <li>#</li>
                            <li>標題</li>
                            <li>發表者</li>
                            <li>新增日期</li>
                            <li>時長</li>
                        </ul> 
                        <div class="hot">
                            熱門...
                        </div>                           
                    </div>
                    <div class="tab-content-2">
                        <ul>
                            <li>#</li>
                            <li>標題</li>
                            <li>發表者</li>
                            <li>新增日期</li>
                            <li>時長</li>
                        </ul>  
                        <div class="new">
                            最新...
                        </div>
                    </div>
                </div>                  
            </div>
            <!--懷舊-->
            <div id="tab-item6" class="tab-item">
                <span id="tab-11">11</span>
                <span id="tab-12">12</span>
                <div id="tab">
                    <ul>
                        <li><a href="#tab-11" checked>熱門</a></li>
                        <li><a href="#tab-12">最新</a></li>
                    </ul>
                    <div class="tab-content-1">
                        <ul>
                            <li>#</li>
                            <li>標題</li>
                            <li>發表者</li>
                            <li>新增日期</li>
                            <li>時長</li>
                        </ul> 
                        <div class="hot">
                            熱門...
                        </div>                           
                    </div>
                    <div class="tab-content-2">
                        <ul>
                            <li>#</li>
                            <li>標題</li>
                            <li>發表者</li>
                            <li>新增日期</li>
                            <li>時長</li>
                        </ul>  
                        <div class="new">
                            最新...
                        </div>
                    </div>
                </div>                  
            </div>
        </div>
    </div>
<!--音樂播放器-->
<div class="music-container" id="music-container">
    <div class="music-info" id="music-info">
        <div class="progress-container" id="progress-container">
            <div class="progress" id="progress"></div>
        </div>
    </div>

    <audio src="music/ukulele.mp3" id="audio"></audio>

    <div class="img-container">
        <img src="img/ukulele.jpg" alt="music-cover" id="cover">
        <h4 id="title"></h4>
        
    </div>
    <div class="navigation">
        <button id="prev" class="action-btn">
            <i class="fas fa-backward"></i>
        </button>
        <button id="play" class="action-btn action-btn-big">
            <i class="fas fa-play"></i>
        </button>
        <button id="next" class="action-btn">
            <i class="fas fa-forward"></i>
        </button>
    </div>
</div>
<script src="js/music.js"></script>
<!--發文-->
    <div id="article" class="article">
        <h2>發表貼文</h2>
        <div class="close">    
            <a href = "javascript:void(0)" onclick = "document.getElementById('article').style.display='none';document.getElementById('fade').style.display='none'">
                <img src="img/close1.png" width="15px" height="15px" 
                    onmouseover="this.src='img/close2.png'" onmouseout="this.src='img/close1.png'"/>
            </a>
        </div>
        <div  class="img">
            <img src="img/ukulele.jpg" alt="music-cover" id="cover" name="picture">
            <h4 id="title" name="name">姓名</h4>   
        </div>
            <form name="post" method="post" action="post.jsp" >
                <div class="article1">
                    <select name="category" style="cursor: pointer;">
                        <option value="disabled selected hidden" style="display: none;">聲音故事分類</option>
                        <option value="nature">自然</option>
                        <option value="city">都市</option>
                        <option value="instrument">器械</option>
                        <option value="vocal">人聲</option>
                        <option value="nostalgia">懷舊</option>
                    </select>
                </div>
                <div class="article1">
                    <textarea name="title" placeholder="標題" rows="" cols="70" required></textarea>
                    <div id="textarea" contenteditable>
                        <output id="list"></output>
                        <textarea  name="post" placeholder="聲音故事..." rows="8" cols="65" required></textarea>            
                        <img contenteditable="false" style="width:500px" id="myimg" />
                    </div>                  
                </div >
                <div class="article1 file">
                    <div style="display:inline;">
                        <label>
                            <input id="files" name="sound" multiple onchange="previewAudio(this);" type="file"  accept="audio/*" style="display:none;" >
                            <img src="img/music1.png" width="30" height="30" style="cursor: pointer;"
                                onmouseover="this.src='img/music2.png'" onmouseout="this.src='img/music1.png'">
                        </label>
                            <label>
                                <input class="file" type='file' id="imgSel" name="image"  accept="image/gif, image/jpeg, image/png" style="display:none;"/>
                                <img src="img/picture1.png" width="30" height="30" style="cursor: pointer;"
                                    onmouseover="this.src='img/picture2.png'" onmouseout="this.src='img/picture1.png'">                    
                            </label>
                    </div>
                </div>
                <script src="js/preview_image.js"></script>
                <script src="js/preview_audio.js"></script>

                <p>Tags</p>
                <div class="simple-tags" id="container" name="tags" data-simple-tags=""></div>
                <script>
                    var el = document.getElementById('container');
                    new Tags(el);
                </script>    
                <div>
                    <label class="publish">
                        <input id="submit" type="submit" value="發佈" style="display:none;">發佈
                    </label>     
                </div>
            </form>
<script src="js/tags.js"></script>
<!--避免tags按enter送出表單-->
<script type="text/javascript">
    $(document).ready(function() {
    $(window).keydown(function(event){
        if(event.keyCode == 13) {
            event.preventDefault();
         return false;
    }
  });
});
</script>     
</body>
</html>