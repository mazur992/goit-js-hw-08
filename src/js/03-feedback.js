import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const STORAGE_VALUE = 'feedback-form-state';

let formData = {};

formEl.addEventListener(
  'input',
  throttle(event => handleAddSubmitLocalStorage(event), 500)
);
function handleAddSubmitLocalStorage(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_VALUE, JSON.stringify(formData));
}

formEl.addEventListener('submit', event => {
  event.preventDefault();
  if (formEl.email.value !== '' && formEl.message.value != '')
    console.log(formData);
  localStorage.removeItem(STORAGE_VALUE);
  formEl.reset();
  formEl.removeEventListener('input', handleAddSubmitLocalStorage);
});

function verifyLocalStorage() {
  const storText = JSON.parse(localStorage.getItem(STORAGE_VALUE));

  if (storText) {
    formEl.email.value = storText.email;
    formEl.message.value = storText.message;
  }
}

verifyLocalStorage();
