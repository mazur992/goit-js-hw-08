import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const STORAGE_VALUE = 'feedback-form-state';

let formData = {};

formEl.addEventListener(
  'input',
  throttle(event => {
    formData[event.target.name] = event.target.value;

    localStorage.setItem(STORAGE_VALUE, JSON.stringify(formData));
  }, 500)
);

formEl.addEventListener('submit', event => {
  event.preventDefault();
  console.log(formData);
  localStorage.removeItem(STORAGE_VALUE);
  formEl.reset();
});

function verifyLocalStorage() {
  const storText = JSON.parse(localStorage.getItem(STORAGE_VALUE));

  if (storText) {
    formEl.email.value = storText.email;
    formEl.message.value = storText.message;
  }
}

verifyLocalStorage();