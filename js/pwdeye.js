//獲取元素（兩種方式都可以）
  
var input = document.getElementById('password')
  
var imgs = document.getElementById('eyes');

//下面是一個判斷每次點選的效果

var flag = 0;

imgs.onclick = function () {

  if (flag == 0) {

    input.type = 'text';

    eyes.src = 'img/eye.png';//睜眼圖

    flag = 1;

  } else {

    input.type = 'password';

    eyes.src = 'img/closeeye.png';//閉眼圖

    flag = 0;

  }

}