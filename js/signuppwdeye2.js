//獲取元素（兩種方式都可以）
  
var pwd2 = document.getElementById('password3')
  
var imgs = document.getElementById('eyes4');

//下面是一個判斷每次點選的效果

var flag = 0;

imgs.onclick = function () {

  if (flag == 0) {

    pwd2.type = 'text';

    eyes4.src = 'img/eye.png';//睜眼圖

    flag = 1;

  } else {

    pwd2.type = 'password';

    eyes4.src = 'img/closeeye.png';//閉眼圖

    flag = 0;

  }

}