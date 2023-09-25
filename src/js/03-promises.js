import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Block } from 'notiflix/build/notiflix-block-aio';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmitClick);

function onSubmitClick(evt) {
  evt.preventDefault();
  Block.dots('.js-submit');
  const amount = Number(form.amount.value);
  const firstDelay = Number(form.delay.value);
  const step = Number(form.step.value);

  for (let i = 0; i < amount; i++) {
    const newDelay = firstDelay + i * step;

    createPromise(i + 1, newDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }

  Block.remove('.js-submit', firstDelay + amount * step + 3000);
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      const answer = { position, delay };
      if (shouldResolve) {
        res(answer);
      } else {
        rej(answer);
      }
    }, delay);
  });
}
