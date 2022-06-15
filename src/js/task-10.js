function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesEl = document.querySelector('#boxes');
const createBoxesBtn = document.querySelector('[data-create]');
const destroyBoxesBtn = document.querySelector('[data-destroy]');
const boxesAmountField = document.querySelector('#controls input');

function createBoxes(amount) {
  const boxes = [];
  let boxSize = 30;

  for (let i = 0; i < amount; i++) {
    boxes.push(document.createElement('div'));

    boxes[i].style.width = `${boxSize}px`;
    boxes[i].style.height = `${boxSize}px`;
    boxes[i].style.backgroundColor = getRandomHexColor();

    boxSize += 10;
  }

  boxesEl.append(...boxes);
}

function destroyBoxes() {
  while (boxesEl.firstChild) {
    boxesEl.removeChild(boxesEl.firstChild);
  }
}

createBoxesBtn.addEventListener('click', () => {
  createBoxes(boxesAmountField.value);
});
destroyBoxesBtn.addEventListener('click', () => {
  destroyBoxes();
});
