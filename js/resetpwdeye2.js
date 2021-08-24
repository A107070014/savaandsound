//獲取元素（兩種方式都可以）
  
var b15 = document.getElementById('b15')
  
var imgs = document.getElementById('eyes2');

//下面是一個判斷每次點選的效果

var flag = 0;

imgs.onclick = function () {

  if (flag == 0) {

    b15.type = 'text';

    eyes2.src = 'img/eye.png';//睜眼圖

    flag = 1;

  } else {

    b15.type = 'password';

    eyes2.src = 'img/closeeye.png';//閉眼圖

    flag = 0;

  }

}