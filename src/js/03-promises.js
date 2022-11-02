import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {

    Notiflix.Notify.info(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {

    Notiflix.Notify.info(`❌ Rejected promise ${position} in ${delay}ms`);
  }

}

let getEl = selector => document.querySelector(selector);
const inputAmount = getEl('input[name = "amount"]');
const inputDelay = getEl('input[name = "delay"]');
const inputStep = getEl('input[name = "step"]');
const btnSubmit = getEl('button[type = "submit"]');

let amountId

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  let amount = inputAmount.value;
  let delay = inputDelay.value;
  let step = inputStep.value;
  let index = 1;

  const promis = new Promise(() => {

    if (parseInt(step) === 0) {

      for (let index = 1; index <= amount; index++) {
        setTimeout(() => {
          createPromise(index, delay);
        }, delay);

      }

    } else {
      amountId = setInterval(() => {

        if (index <= amount) {
          createPromise(index, delay);
          index++;
          delay = parseInt(delay) + parseInt(step);
        } else {
          clearInterval(amountId)
        }

      }, delay);
    }


  });

  promis
    .then(data => Notiflix.Notify.info(data))
    .catch(data => Notiflix.Notify.info(data))

})
