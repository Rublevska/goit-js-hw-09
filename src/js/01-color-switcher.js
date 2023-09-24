const body = document.querySelector('body');
const startBtn = document.querySelector('.js-start');
const stopBtn = document.querySelector('.js-stop');
let changeColorStarted = false;
let timerId;

startBtn.addEventListener('click', startColorChange);
stopBtn.addEventListener('click', stopColorChange);

function startColorChange() {
  if (changeColorStarted) {
    return;
  }
  changeColorStarted = true;
  startBtn.disabled = true;
  timerId = setInterval(changeColor, 1000);
}

function stopColorChange() {
  clearInterval(timerId);
  startBtn.disabled = false;
  changeColorStarted = false;
}

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
