const inputEl = document.querySelector('#name-input');
// console.log(inputEl);
const nameLabelEl = document.querySelector('#name-output');
// console.log(nameLabelEl);

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  //   console.log(event.currentTarget.value);
  nameLabelEl.textContent = event.currentTarget.value;

  if (event.currentTarget.value === '') {
    nameLabelEl.textContent = 'Anonymous';
  }
}
