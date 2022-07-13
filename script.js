let hr = document.getElementById('hrc')
let aboutmep = document.getElementById('aboutmep')
let options = document.getElementById('options')
let msr_div = document.getElementById('msr_div')
let profile = document.getElementById('profile')
let abmr = document.querySelector('.rotate_text')
let at = document.querySelector('.mc_div_at')

function aboutme(){

hr.style.left = '45px'
hr.style.transition = '.6s'
aboutmep.style.display = 'block'
aboutmep.style.transition = '.4s'
msr_div.style.display = 'none'
abmr.style.left = '0'
options.style.display = 'block'
profile.style.width = '500px'
at.style.display = 'none'
profile.style.transition = '.4s'
options.style.transition = '.4s'

}

function msr(){

hr.style.left = '150px'
aboutmep.style.display = 'none'
profile.style.transition = '.4s'
profile.style.width = '700px'
options.style.display = 'none'
msr_div.style.display = 'block'
hr.style.transition = '.3s'
at.style.display = 'none'
abmr.style.left = '110px'
// msr.style.left = '150px'
}

function mc(){

hr.style.left = '275px'
hr.style.transition = '.6s'
abmr.style.left = '110px'
aboutmep.style.display = 'none'
options.style.display = 'none'
profile.style.width = '500px'
msr_div.style.display = 'none'
abmr.style.left = '0'
at.style.display = 'block'
}

function mw(){

hr.style.left = '400px'
hr.style.transition = '.6s'

}
