let counterValue = document.querySelector('#value');
// console.log(counterValue);

let valueEl = Number(counterValue.textContent);
// console.log(valueEl);

const decrementBtn = document.querySelector('#counter').firstElementChild;
// console.log(decrementBtn);
const incrementBtn = document.querySelector('#counter').lastElementChild;
// console.log(incrementBtn);

incrementBtn.addEventListener('click', event => {
  //   console.log(event);
  valueEl += 1;

  counterValue.innerText = valueEl;
});

decrementBtn.addEventListener('click', event => {
  valueEl -= 1;

  counterValue.innerText = valueEl;
});
