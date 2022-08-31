// 1 //
const allFirstLiInUl = document.querySelectorAll('.item');
// console.log(allFirstLiInUl);
console.log(`Number of categories: ${allFirstLiInUl.length}`);

// 2 //

allFirstLiInUl.forEach(element => {
  const title = element.querySelector('h2').textContent;
  const itemsLength = element.querySelectorAll('li').length;
  console.log(`Category: ${title} \n Elements: ${itemsLength}`);
});
