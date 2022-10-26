const controlInput = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

controlInput.addEventListener('input', (event) => {
    spanText.style.fontSize = `${event.target.value}px`;
});