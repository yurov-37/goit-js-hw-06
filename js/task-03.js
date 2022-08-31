const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesGalleryEl = document.querySelector('.gallery');
// console.log(imagesGalleryEl);

//1 вариант//

images.forEach(element => {
  imagesGalleryEl.insertAdjacentHTML(
    'afterbegin',
    `<li><img src = "${element.url}" alt = "${element.alt}"  width = "450" height = "250" /></li>`
  );
});

//2 вариант//

// const image = images.reduce(
//   (string, item) =>
//     string + `<img src = "${item.url}" alt = "${item.alt}"  width = "150" height = "100" />`,
//   ''
// );
// console.log(image);
// // imagesGalleryEl.innerHTML = image;

//3 вариант//

// const imageItems = [];

// for (let i = 0; i < images.length; i += 1) {
//   const imageAttributes = images[i];
//   const liEl = document.createElement('li');
//   const imageEl = document.createElement('img');
//   imageEl.setAttribute('src', imageAttributes.url);
//   imageEl.setAttribute('alt', imageAttributes.alt);
//   imageEl.setAttribute('width', 450);
//   // imageEl.setAttribute('height', 300);
//   liEl.append(imageEl);
//   // console.log(liEl);

//   imageItems.push(liEl);
// }
// // console.log(imageItems);
// imagesGalleryEl.append(...imageItems);

//4 вариант//

// const liItemsWithImg = images.map(image => {
//   const liEl = document.createElement('li');
//   const imageEl = document.createElement('img');
//   imageEl.setAttribute('src', image.url);
//   imageEl.setAttribute('alt', image.alt);
//   imageEl.setAttribute('width', 450);
//   liEl.append(imageEl);

//   return liEl;
// });

// console.log(liItemsWithImg);
// imagesGalleryEl.append(...liItemsWithImg);
// console.log(imagesGalleryEl);
