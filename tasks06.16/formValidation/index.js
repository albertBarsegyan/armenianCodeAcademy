const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const sendButton = document.querySelector('#sendButton');
const messageContainer = document.querySelector('#messageContainer');
const messageBlock = document.querySelector('#errorMessage');

function emailValid(e) {
  const emailCheckReg =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  console.log(this.value);
  if (emailCheckReg.test(this.value)) {
    e.target.classList.remove('validation-message--invalid');
    e.target.classList.add('validation-message--success');
  } else {
    e.target.classList.remove('validation-message--success');
    e.target.classList.add('validation-message--invalid');
  }
}
function passwordValid(e) {
  const passwordCheckReg = /^(([374]{4}|[0]{1}))?([1-9]{2})(\d{6})$/;
  console.log(this.value);
  if (passwordCheckReg.test(this.value)) {
    e.target.classList.remove('validation-message--invalid');
    e.target.classList.add('validation-message--success');
  } else {
    e.target.classList.remove('validation-message--success');
    e.target.classList.add('validation-message--invalid');
  }
}
email.addEventListener('change', emailValid);
phone.addEventListener('change', passwordValid);
