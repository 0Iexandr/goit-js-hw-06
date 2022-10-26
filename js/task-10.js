const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    boxes.insertAdjacentHTML('beforeend', `<div style='background: ${getRandomHexColor()}'></div>`);
    boxes.children[i].style.width = `${30 + 10 * i}px`;
    boxes.children[i].style.height = `${30 + 10 * i}px`;
  };
};

createBtn.addEventListener('click', () => createBoxes(input.value));
destroyBtn.addEventListener('click', () => boxes.innerHTML = '');