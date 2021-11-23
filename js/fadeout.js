 //  隐藏按钮点击
 document.querySelector('#close').onclick = function() {
    document.querySelector('#saveandsound').style.opacity = 0;
    document.querySelector('#fade2').style.opacity = 0; 

    //  延迟400毫秒
    setTimeout(function() {
        document.querySelector('#saveandsound').style.display = 'none'; 
        
    }, 400);
    setTimeout(function() {
        document.querySelector('#fade2').style.display = 'none'; 
    }, 400);
};
