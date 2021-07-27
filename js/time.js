const startingMinutes = 00;
let time = startingMinutes * 0;
 
const count = document.getElementById('count');

setInterval(updateCount,1000);

function updateCount(){
    const minutes = Math.floor(time/60);
    let seconds = time * 01;
    
    /*seconds = seconds < 10 ? '0' + seconds : seconds;*/
    
    count.innerHTML = `${minutes}:${seconds}`;
    time++;
}