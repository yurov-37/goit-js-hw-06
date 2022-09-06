const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ulEl = document.querySelector('#ingredients');
let newArrayOfLi = [];
ingredients.forEach(ingredient => {
  // console.log(ingredient);
  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = ingredient;
  newArrayOfLi.push(liEl);
});
// console.log(newArrayOfLi);
ulEl.append(...newArrayOfLi);
