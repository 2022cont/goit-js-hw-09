import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.round() > 0.3
    setTimeout(() => {
      if (shouldResolve) {
        res({ position, delay })
      } else {
        rej({ position, delay })
      }
    }, delay)
  })
};

let getEl = selector => document.querySelector(selector);
const inputAmount = getEl('input[name = "amount"]');
const inputDelay = getEl('input[name = "delay"]');
const inputStep = getEl('input[name = "step"]');
const btnSubmit = getEl('button[type = "submit"]');

let amountId

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  let amount = parseInt(inputAmount.value);
  let delay = parseInt(inputDelay.value);
  let step = parseInt(inputStep.value);

  for (let index = 1; index <= amount; index++) {

    createPromise(index, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.info(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.info(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delay += step;
  }
});



