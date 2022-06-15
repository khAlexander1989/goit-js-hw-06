const sliderEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

sliderEl.addEventListener('input', ({ target: { value } }) => {
  textEl.style.fontSize = `${value}px`;
});
