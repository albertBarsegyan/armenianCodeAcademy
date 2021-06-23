// button
const startButton = document.querySelector('#startButton');
const stopButton = document.querySelector('#stopButton');
const resetButton = document.querySelector('#resetButton');

const messageBlock = document.querySelector('.message');
// input time
const hourInput = document.querySelector('#hourInput');
const minuteInput = document.querySelector('#minuteInput');
const secondInput = document.querySelector('#secondInput');

const inputTime = document.querySelectorAll('.input-time');
inputTime.forEach((element) => {
  element.setAttribute('maxlength', '2');
  element.addEventListener('keyup', (e) => {
    if (checkIfInputIsTime(e.target)) {
      e.target.classList.remove('input--invalid');
      e.target.classList.add('input--success');
    } else {
      e.target.classList.remove('input--success');
      e.target.classList.add('input--invalid');
    }
  });
});
// output
const timerOutput = document.querySelector('#timerOutput');
let secondCount;
// event listener
function startEvent(e) {
  if (messageBlock.style.display === 'block') {
    messageBlock.style.left = 'calc(0px - 20%)';
    messageBlock.style.transform = 'translateX(0%)';
    messageBlock.style.opacity = 0;
    setTimeout(() => {
      messageBlock.style.display = 'none';
    }, 650);
  }
  if (
    checkIfInputIsTime(hourInput) &&
    checkIfInputIsTime(minuteInput) &&
    checkIfInputIsTime(secondInput)
  ) {
    inputTime.forEach((input) => {
      input.setAttribute('disabled', '');
    });
    secondCount === undefined
      ? timerStart(hourInput, minuteInput, secondInput)
      : null;
  }
}

startButton.addEventListener('click', startEvent);

stopButton.addEventListener('click', stopEvent);
resetButton.addEventListener('click', (e) => {
  stopEvent();
  inputTime.forEach((input) => {
    input.removeAttribute('disabled', '');
    input.value = '';
  });
});
// functions
function checkIfInputIsTime(input) {
  const timeRegex = /^\d{1,2}/;
  if (timeRegex.test(input.value)) {
    return true;
  } else {
    return false;
  }
}

function timerStart(hourInput, minuteInput, secondInput) {
  secondCount = setInterval(() => {
    if (
      Number(hourInput.value) === 0 &&
      Number(minuteInput.value) === 0 &&
      Number(secondInput.value) === 0
    ) {
      clearInterval(secondCount);
      secondCount = undefined;
      messageBlock.style.display = 'block';
      setTimeout(() => {
        messageBlock.style.left = '50%';
        messageBlock.style.transform = 'translateX(-50%)';
        messageBlock.style.opacity = 1;
      }, 100);
      return;
    }
    secondInput.value -= 1;
    console.log(Number(secondInput.value));
    if (Number(secondInput.value) < 0) {
      secondInput.value = 59;
      minuteInput.value -= 1;
    }
    if (Number(minuteInput.value) < 0) {
      minuteInput.value = 59;
      hourInput.value -= 1;
    }
  }, 1000);
}

function stopEvent() {
  clearInterval(secondCount);
  secondCount = undefined;
}
