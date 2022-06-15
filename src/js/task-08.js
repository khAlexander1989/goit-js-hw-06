const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', event => {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email && password) {
    const formData = {
      email,
      password,
    };

    console.log(formData);

    event.currentTarget.reset();
  } else {
    alert('Все поля должны быть заполнены!!!');
  }
});
