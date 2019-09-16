const myform = document.querySelector('#form1');
const email  = document.querySelector('#email');
const password = document.querySelector('#pass');
const msg = document.querySelector('.msg');

myform.addEventListener('submit', onSubmit);

function onSubmit(i) {
    i.preventDefault();
    if (email.value === '' || password.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields.';
        setTimeout(() => msg.remove(),3000);
    }
    else {
        console.log('Signed In');
    }
}

