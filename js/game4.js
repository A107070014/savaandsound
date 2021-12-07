//第七題
let playStop4 = document.getElementById('stop4')
let playRwdStop4 = document.getElementById('rwdstop4')
let playStart4= document.getElementById('playyyy')
let audio4 = document.getElementById('Music4')

playStop4.addEventListener('click',()=>{
  audio4.pause()
  audio4.currentTime = 0
})
playRwdStop4.addEventListener('click',()=>{
  audio4.pause()
  audio4.currentTime = 0
})
playStart4.addEventListener('click',()=>{
  audio4.play()
})

