const validationInputEl = document.querySelector('#validation-input');

validationInputEl.addEventListener('blur', ({ target: { classList, value, dataset } }) => {
  if (value.length === Number(dataset.length)) {
    classList.remove('invalid');
    classList.add('valid');
  } else {
    classList.remove('valid');
    classList.add('invalid');
  }
});
