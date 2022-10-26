const validationInput = document.querySelector('#validation-input');
const inputDataLength = validationInput.getAttribute('data-length');

validationInput.addEventListener('blur', (event) => {
    if(event.target.value.length == inputDataLength) {
        validationInput.className = 'valid';
    } else {
        validationInput.className = 'invalid';
    }
});