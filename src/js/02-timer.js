import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

let getEl = selector => document.querySelector(selector);
const inputText = getEl('input[type = "text"]');

const timer = {
  timerId: null,
  startTimer() {
    const startTime = calendar.selectedDates[0];

    this.timerId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      const convertDate = convertMs(deltaTime);

      if ((parseInt(convertDate.seconds) <= 0) && (parseInt(convertDate.minutes) <= 0)
        && (parseInt(convertDate.hours) <= 0) && (parseInt(convertDate.days) <= 0)) {
        clearInterval(this.timerId);
      };

      getEl('[data-days]').textContent = convertDate.days;
      getEl('[data-hours]').textContent = convertDate.hours;
      getEl('[data-minutes]').textContent = convertDate.minutes;
      getEl('[data-seconds]').textContent = convertDate.seconds;

    }, 1000)

  }

};

getEl('button').addEventListener('click', () => {
  timer.startTimer();
});


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {

    if (selectedDates[0] < options.defaultDate) {
      Notiflix.Notify.info("Please choose a date in the future");
    } else {
      getEl('button').removeAttribute("disabled");

    }
  }
}

let calendar = flatpickr(inputText, options);
getEl('button').setAttribute("disabled", "disabled");
getEl('input[type = "text"]').addEventListener('input', calendar);

function addLeadingZero(dataString) {
  return String(dataString).padStart(2, '0');
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
