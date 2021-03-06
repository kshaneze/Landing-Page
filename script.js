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

////////////////////////
// infinte scroll

const container = document.querySelector('.container');
const loading = document.querySelector('.loading');

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  // if the height we see and the height scrolled from top >= then whole amount of possible scrollHeight we reached bottom of the page
  if (scrollTop + clientHeight + 5 >= scrollHeight) {
    console.log('scrolled to bottom');
    showLoadingImages();
  }
});

const getImages = function () {
  fetch('https://jsonplaceholder.typicode.com/photos/78')
    .then(res => res.json())
    .then(dataPhoto => addImagesToDOM(dataPhoto));
};

const addImagesToDOM = function (dataPhoto) {
  container.insertAdjacentHTML(
    'beforeend',
    `<img class="img nature" src="${dataPhoto.url}" />`
  );
  loading.classList.remove('show');
};

const showLoadingImages = function () {
  // Show circle
  loading.classList.add('show');

  // display data Images
  getImages();
  getImages();
  getImages();
  getImages();
};
