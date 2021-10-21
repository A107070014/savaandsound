//第一題
let playStop = document.getElementById('stop')
let playRwdStop = document.getElementById('rwdstop')
//let playStart = document.getElementById('play')
let audio = document.getElementById('Music')

playStop.addEventListener('click',()=>{
  audio.pause()
  audio.currentTime = 0
})
playRwdStop.addEventListener('click',()=>{
  audio.pause()
  audio.currentTime = 0
})
/*playStart.addEventListener('click',()=>{
  audio.play()
})*/

//第二題
let playStop2 = document.getElementById('stop2')
let playRwdStop2 = document.getElementById('rwdstop2')
let playStart2 = document.getElementById('playy')
let audio2 = document.getElementById('Music2')

playStop2.addEventListener('click',()=>{
  audio2.pause()
  audio2.currentTime = 0
})
playRwdStop2.addEventListener('click',()=>{
  audio2.pause()
  audio2.currentTime = 0
})
playStart2.addEventListener('click',()=>{
  audio2.play()
})





