const incBtnEl = document.querySelector('[data-action=increment]');
const decBtnEl = document.querySelector('[data-action=decrement]');
const countervalueEl = document.querySelector('#value');
let counterValue = 0;

incBtnEl.addEventListener('click', () => {
  countervalueEl.textContent = ++counterValue;
});
decBtnEl.addEventListener('click', () => {
  countervalueEl.textContent = --counterValue;
});
