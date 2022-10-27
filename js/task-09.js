const body = document.querySelector('body');
const colorValueView = document.querySelector('.color');
const toggleColorBtn = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

toggleColorBtn.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  body.style.background = randomColor;
  colorValueView.innerText = randomColor;
});