// * example use case: USER FORM SCRIPT

// put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // remove error after 3 seconds
    setTimeout(() => {
      msg.innerHTML = '';
      msg.classList.remove('error');
    }, 3000);
  } else {
    // create new list item with user
    const li = document.createElement('li');

    // add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // append to ul
    userList.appendChild(li);

    // clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}