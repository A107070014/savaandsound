//獲取元素（兩種方式都可以）
  
var b14 = document.getElementById('b14')
  
var imgs = document.getElementById('eyes1');

//下面是一個判斷每次點選的效果

var flag = 0;

imgs.onclick = function () {

  if (flag == 0) {

    b14.type = 'text';

    eyes1.src = 'img/eye.png';//睜眼圖

    flag = 1;

  } else {

    b14.type = 'password';

    eyes1.src = 'img/closeeye.png';//閉眼圖

    flag = 0;

  }

}