const formEl = document.querySelector('.login-form');
console.log(formEl);

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  //   const {
  //     elements: { email, password },
  //   } = event.currentTarget;

  //   if (email.value === '' || password.value === '') {
  //     return alert('Все поля должны быть заполнены');
  //   }

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === '' || password === '') {
    return alert('Все поля должны быть заполнены');
  }

  const userInfo = { email: email, Password: password };
  console.log(userInfo);
  event.currentTarget.reset();
}
