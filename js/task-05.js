const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', ({ target: { value } }) => {
  nameOutputEl.textContent = value || 'Anonymous';
});
