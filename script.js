const submit = document.querySelector('.submit');
const h1 = document.querySelector('h1');
const result = document.querySelector('.result');

submit.addEventListener('click', function(){
  h1.textContent = 'Troll App';
  result.textContent = 'Hello World!'
})
