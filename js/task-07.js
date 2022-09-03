const range = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
range.value = 16;

range.addEventListener('input', onInputFontSize);

function onInputFontSize(event) {
  console.log(event.currentTarget.value);
  text.style.fontSize = event.currentTarget.value + 'px';
}
