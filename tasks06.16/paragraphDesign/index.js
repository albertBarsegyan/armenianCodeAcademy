const todoInput = document.querySelector('#todoInput');
const inputText = document.querySelector('#inputText');

const colorInput = document.querySelector('#colorValue');
const backInput = document.querySelector('#backValue');
const applyButton = document.querySelector('#applyButton');
// creating list item container
function makeListItemContainer(event) {
  inputText.innerText = event.target.value;
}

// event listeners
todoInput.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    if (e.target.value.length > 0) {
      makeListItemContainer(e);
    }
  }
});

// checking if string is number hex
function checkIfHex(input) {
  const hexReg = /(^#[0-9A-Fa-f]{6}$)|(^#[0-9A-Fa-f]{3}$)/gi;
  if (hexReg.test(input.value)) {
    return true;
  }
  return false;
}

function onInputCheck(e) {
  if (checkIfHex(e.target)) {
    if (e.target.classList.contains('input--invalid')) {
      e.target.classList.remove('input--invalid');
      console.log('contains invalid');
    }
    e.target.classList.add('input--success');
  } else {
    if (e.target.classList.contains('input--success')) {
      e.target.classList.remove('input--success');
      console.log('contains success');
    }
    e.target.classList.add('input--invalid');
    console.log('this is hex');
  }
}

colorInput.addEventListener('keyup', onInputCheck);
backInput.addEventListener('keyup', onInputCheck);
applyButton.addEventListener('click', function (e) {
  if (checkIfHex(backInput) && checkIfHex(colorInput)) {
    inputText.style.color = String(colorInput.value);
    inputText.style.backgroundColor = String(backInput.value);
  }
});
