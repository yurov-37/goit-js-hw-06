function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');
const body = document.querySelector('body');
console.log(body);

buttonEl.addEventListener('click', onChangeColorClick);

function onChangeColorClick(event) {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorValue.textContent = color;
}
