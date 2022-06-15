function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const colorValueEl = document.querySelector('.color');

changeColorBtn.addEventListener('click', event => {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  colorValueEl.textContent = color;
});
