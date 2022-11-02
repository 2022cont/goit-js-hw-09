const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId = null;

const onClickStart = () => {
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    btnStart.setAttribute("disabled", "disabled");
    btnStop.removeAttribute("disabled");
};

const onClickStop = () => {
    clearInterval(timerId);
    btnStart.removeAttribute("disabled");
    btnStop.setAttribute("disabled", "disabled");
}

btnStart.addEventListener('click', onClickStart);
btnStop.addEventListener('click', onClickStop);


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


