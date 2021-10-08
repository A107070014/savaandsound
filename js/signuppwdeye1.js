//獲取元素（兩種方式都可以）
  
var pwd = document.getElementById('password2')
  
var imgs = document.getElementById('eyes3');

//下面是一個判斷每次點選的效果

var flag = 0;

imgs.onclick = function () {

  if (flag == 0) {

    pwd.type = 'text';

    eyes3.src = 'img/eye.png';//睜眼圖

    flag = 1;

  } else {

    pwd.type = 'password';

    eyes3.src = 'img/closeeye.png';//閉眼圖

    flag = 0;

  }

}