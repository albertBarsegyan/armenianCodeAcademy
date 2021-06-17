const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const sendButton = document.querySelector('#sendButton');
const messageContainer = document.querySelector('#messageContainer');
const messageBlock = document.querySelector('#messageContainer');
const phoneNumberContainer = document.querySelector('#phoneContainer');
const phoneCode = document.querySelector('.phonecode');
const modalContainer = document.querySelector('.modal-container');
const closeButton = document.querySelector('#closeButton');

function emailValid(e) {
  const emailCheckReg =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  // console.log(this.value);
  if (emailCheckReg.test(this.value)) {
    e.target.classList.remove('validation-message--invalid');
    e.target.classList.add('validation-message--success');

    e.target.style.color = 'rgb(39, 180, 39)';
    setTimeout(() => {
      messageBlock.style.opacity = 0;
    }, 500);
    setTimeout(() => {
      messageBlock.style.display = 'none';
    }, 600);
  } else {
    e.target.classList.remove('validation-message--success');
    e.target.classList.add('validation-message--invalid');

    e.target.style.color = 'rgb(240, 41, 41)';
    messageBlock.style.display = 'block';
    setTimeout(() => {
      messageBlock.style.opacity = 1;
    }, 500);
  }
}
function phoneValid(e) {
  const phoneCheckRed = /(^0\d{8})|^[^0]\d{7}/;

  if (
    phoneCheckRed.test(this.value) &&
    [8, 9].includes(e.target.value.length)
  ) {
    phoneCode.classList.remove('validation-message--invalid');
    phoneCode.classList.add('validation-message--success');
    e.target.style.color = 'rgb(39, 180, 39)';
    e.target.classList.remove('validation-message--invalid');
    e.target.classList.add('validation-message--success');
    setTimeout(() => {
      phoneNumberContainer.style.opacity = 0;
    }, 500);
    setTimeout(() => {
      phoneNumberContainer.style.display = 'none';
    }, 600);
  } else {
    phoneCode.classList.remove('validation-message--success');
    phoneCode.classList.add('validation-message--invalid');
    e.target.style.color = 'rgb(240, 41, 41)';
    e.target.classList.remove('validation-message--success');
    e.target.classList.add('validation-message--invalid');
    phoneNumberContainer.style.display = 'block';
    setTimeout(() => {
      phoneContainer.style.opacity = '1';
    }, 500);
  }
}

sendButton.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(email.classList, phone.classList);
  if (
    email.classList.contains('validation-message--success') &&
    phone.classList.contains('validation-message--success')
  ) {
    modalContainer.style.display = 'flex';
    setTimeout(() => {
      modalContainer.style.opacity = '1';
    }, 500);
  } else {
    console.log('dont');
  }
});

email.addEventListener('focusout', emailValid);
phone.addEventListener('focusout', phoneValid);
closeButton.addEventListener('click', function () {
  modalContainer.style.opacity = 0;
  setTimeout(() => {
    modalContainer.style.display = 'none';
  }, 600);
});
