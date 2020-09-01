/**
 * Menu Secundário
 */
const menuDoc = document.getElementsByClassName('link-nav-arrow')[0];
const listSecond = document.querySelector('.list-nav-second');
const teste = listSecond.classList;

menuDoc.addEventListener('click', function(){

  listSecond.classList.toggle('hide');
  menuDoc.classList.toggle('arrow');

});

/**
 * Menu hamburguer
 * Acionamento do menu
 */

const iconMenu = document.querySelector(".icon-menu");
// const menu = document.querySelector(".menu");
const content = document.querySelector(".content");

const body = document.querySelector("body");

iconMenu.addEventListener("click", function(){

  body.classList.toggle("move");
  // menu.classList.toggle('menu-move');
  // content.classList.toggle('content-move');

});

/**
 * Recolhimento do menu clicando no content
 */

 content.addEventListener("click", function(){
  body.classList.remove("move");
 });

