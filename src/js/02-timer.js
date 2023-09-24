import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  inputEl: document.getElementById('datetime-picker'),
  startBtn: document.getElementById('js-startBtn'),
  timerRun: false,
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

refs.startBtn.disabled = true;
let timerId;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Notify.failure('Please choose a date in the future');
      return;
    }
    refs.startBtn.disabled = false;
  },
};

const testResult = flatpickr(refs.inputEl, options);

refs.startBtn.addEventListener('click', onClickStart);

function onClickStart() {
  if (refs.timerRun) {
    return;
  }
  refs.timerRun = true;
  refs.startBtn.disabled = true;
  timerId = setInterval(TimerCounter, 1000);
}

function TimerCounter() {
  const deltaTime = testResult.selectedDates[0] - Date.now();
  if (deltaTime < 0) {
    clearInterval(timerId);
    return;
  }
  const deltaTimeParse = convertMs(deltaTime);
  refs.days.textContent = deltaTimeParse.days;
  refs.hours.textContent = deltaTimeParse.hours;
  refs.minutes.textContent = deltaTimeParse.minutes;
  refs.seconds.textContent = deltaTimeParse.seconds;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
