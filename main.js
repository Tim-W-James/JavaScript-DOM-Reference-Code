// * element selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));

// * multiple element selectors
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByTagName('li'));     // ! cannot use array methods
console.log(document.getElementsByClassName('item')); // ! cannot use array methods

// * manipulating the DOM
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Hi';
ul.lastElementChild.innerHTML = '<b>Hello</b>'; // edit HTML

const btn = document.querySelector('.btn');
btn.style.background = 'gray'; // edit CSS

// * events
btn.addEventListener('click', e => {
  e.preventDefault(); // prevent default behaviour
  console.log(e.target.className); // target refers to the element the event is on
  document.getElementById('my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark'); // add a CSS class
  ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
});
// other events: mouseover, mouseout