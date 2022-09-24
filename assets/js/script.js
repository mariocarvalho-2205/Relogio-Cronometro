function clockSpeed (second) {
  const clSpeed = new Date(second * 1000)
  return clSpeed.toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'GMT'})
}

const body = document.querySelector('body')
const hora = document.querySelector('#hora')
const min = document.querySelector('#min')
const sec = document.querySelector('#sec')
const timer = document.querySelector('.timer')
const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const reset = document.querySelector('.reset')
let second = 0
let init


const clock = setInterval(function () {
  let data = new Date()
  let hr = zeroLeft(data.getHours())
  let mn = zeroLeft(data.getMinutes())
  let sc = zeroLeft(data.getSeconds())
  let ml
  console.log(hr, mn, sc)
  hora.innerHTML = `${hr}`
  min.innerHTML = `${mn}`
  sec.innerHTML = `${sc}`
}, 1000)


function zeroLeft(num) {
  return num >= 10 ? num : `0${num}`
}

// =-=-=- cronometro -=--=-=-=


function initClock () {
  init = setInterval( function () {
    second++; timer.innerHTML = clockSpeed(second);
  }, 1000);
}

document.addEventListener('click', function (e) {
  const el = e.target
  if (el.classList.contains('start')) {
    body.classList.remove('pausado')
    clearInterval(init)
    initClock()
  }
  if ( el.classList.contains('stop')) {
    body.classList.add('pausado')
    clearInterval(init)
  }
  if (el.classList.contains('reset')) {
    body.classList.remove('pausado')
    clearInterval(init)
    timer.innerHTML = '00:00:00'
    second = 0
  }
  console.log(el)
})
