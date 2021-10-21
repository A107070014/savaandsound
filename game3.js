//第三題
let playStop3 = document.getElementById('stop3')
let playRwdStop3 = document.getElementById('rwdstop3')
let playStart3 = document.getElementById('playyy')
let audio3 = document.getElementById('Music3')

playStop3.addEventListener('click',()=>{
  audio3.pause()
  audio3.currentTime = 0
})
playRwdStop3.addEventListener('click',()=>{
  audio3.pause()
  audio3.currentTime = 0
})
playStart3.addEventListener('click',()=>{
  audio3.play()
})








