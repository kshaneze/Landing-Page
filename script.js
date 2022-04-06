'use strict';

// BIG MENU - NAVIGATION FIXED
const navButton = document.querySelector('.nav__button');
const background = document.querySelector('.background');
const navLists = document.querySelector('.nav');

navButton.addEventListener('click', function (e) {
  navButton.classList.toggle('active');
  background.classList.toggle('active');
  navLists.classList.toggle('active');
});

// BANNER - SLIDER

const btnLeft = document.querySelector('.button-left');
const btnRight = document.querySelector('.button-right');
const imgs = document.querySelectorAll('.imgs-slider');
const dotsContainer = document.querySelector('.dots__container');

let maxSlide = imgs.length;
let currentSlide = 0;

// CREATE Dots
const createDots = function () {
  imgs.forEach((_, i) => {
    dotsContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dot" data-slide="${i}"></button>`
    );
  });
};
createDots();

// Show dot that is active

const displayActiveDot = function (slide) {
  const dots = document.querySelectorAll('.dot');
  dots.forEach(dot => {
    dot.classList.remove('active-dot');
  });

  document
    .querySelector(`.dot[data-slide="${slide}"]`)
    .classList.add('active-dot');
};

displayActiveDot(0);
//////////////////////

// With this function we change postion of images on x-axes
const slidePosition = function (slide) {
  imgs.forEach((img, i) => {
    img.style.transform = `translateX(${100 * (i - slide)}rem)`;
  });
};
slidePosition(0);

// Right arrow button functionality
const rightSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  slidePosition(currentSlide);
  displayActiveDot(currentSlide);
};

// Left arrow button functionality
const leftSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  slidePosition(currentSlide);
  displayActiveDot(currentSlide);
};

btnRight.addEventListener('click', rightSlide);
btnLeft.addEventListener('click', leftSlide);

// Adding functionality of sliding to dots

dotsContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dot')) {
    const slide = e.target.dataset.slide;
    slidePosition(slide);
    displayActiveDot(slide);
  }
});
