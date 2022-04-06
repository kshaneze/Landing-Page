'use strict';

const navButton = document.querySelector('.nav__button');
const background = document.querySelector('.background');
const navLists = document.querySelector('.nav');

navButton.addEventListener('click', function (e) {
  navButton.classList.toggle('active');
  background.classList.toggle('active');

  navLists.classList.toggle('active');
});
