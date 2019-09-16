const myform = document.querySelector('#form1');
const email  = document.querySelector('#email');
const password = document.querySelector('#pass');
const tele = document.querySelector('#contact');
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const msg = document.querySelector('.msg');

myform.addEventListener('submit', onSubmit);

function onSubmit(i) {
    i.preventDefault();
    if (email.value === '' || password.value === '' || tele.value === '' ||
     fname.value === '' || lname === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields.';
        setTimeout(() => msg.remove(),3000);
    }
    else {
        console.log('Signed In');
    }
}

