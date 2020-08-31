let menuDoc = document.getElementsByClassName('link-nav-arrow')[0];
let listSecond = document.querySelector('.list-nav-second');
let teste = listSecond.classList;

console.log(teste);

menuDoc.addEventListener('click', function() {
  let teste = listSecond.classList.toggle('hide');
  menuDoc.classList.toggle('arrow');
});