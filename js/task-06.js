const inputEl = document.querySelector('#validation-input');
// console.log(Number(inputEl.textContent.length));

const dataLengthNum = Number(inputEl.getAttribute('data-length'));
// console.log(dataLengthNum);

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  //   console.log('Потеря фокуса события Blur');
  //   console.log(event.currentTarget.value);
  if (event.currentTarget.value.length === dataLengthNum) {
    if (inputEl.classList.contains('invalid')) {
      inputEl.classList.remove('invalid');
    }
    inputEl.classList.add('valid');
  } else if (event.currentTarget.value.length === 0) {
    if (inputEl.classList.contains('invalid')) {
      inputEl.classList.remove('invalid');
    } else if (inputEl.classList.contains('valid')) {
      inputEl.classList.remove('valid');
    }
  } else {
    if (inputEl.classList.contains('valid')) {
      inputEl.classList.remove('valid');
    }
    inputEl.classList.add('invalid');
  }
}
