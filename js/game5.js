//第十題
let playStop5 = document.getElementById('stop5')
let playRwdStop5 = document.getElementById('rwdstop5')
let playStart5= document.getElementById('playyyyy')
let audio5 = document.getElementById('Music5')

playStop5.addEventListener('click',()=>{
  audio5.pause()
  audio5.currentTime = 0
})
playRwdStop5.addEventListener('click',()=>{
  audio5.pause()
  audio5.currentTime = 0
})
playStart5.addEventListener('click',()=>{
  audio5.play()
})

