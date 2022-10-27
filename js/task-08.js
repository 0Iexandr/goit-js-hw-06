const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const {email, password} = event.currentTarget;
  
    if (!email.value || !password.value) {
        alert("Please fill in all the fields!");
        return;
    }

    console.log({email: email.value, password: password.value});
    event.currentTarget.reset();
});