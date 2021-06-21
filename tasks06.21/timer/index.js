// button
const startButton = document.querySelector('#startButton');
const stopButton = document.querySelector('#stopButton');
const resetButton = document.querySelector('#resetButton');

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
// event listener
startButton.addEventListener('click', (e) => {
  if (
    checkIfInputIsTime(hourInput) &&
    checkIfInputIsTime(minuteInput) &&
    checkIfInputIsTime(secondInput)
  ) {
    const hour = hourInput.value;
    const minute = minuteInput.value;
    const second = secondInput.value;
    // inputTime.forEach((input) => {
    //   const newElement = document.createElement('span');
    //   newElement.classList.add('input-time');
    //   newElement.innerText = input.value;
    //   input.parentNode.replaceChild(newElement, input);
    // });
  }
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
