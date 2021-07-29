//初始化變數 
var minute,second;

//分 秒 
minute=second=0;

//初始化 
var millisecond=0;

//毫秒 
var int; 

//重置函式 
function Reset() { 
    window.clearInterval(int); 
    millisecond=minute=second=0; 
    document.getElementById('timetext').value='00分00秒';    
}

//開始函式 
function start() { int=setInterval(timer,50); //每隔50毫秒執行一次timer函式 
    }

//計時函式 
function timer() { millisecond=millisecond+50; 
    if(millisecond>=1000) { millisecond=0; second=second+1; } 
    if(second>=60) { second=0; minute=minute+1; }  
    document.getElementById('timetext').value=minute+'分'+second+'秒'; 
    } 

//暫停函式 
function stop() { window.clearInterval(int); }
        
    
    
    
    
    