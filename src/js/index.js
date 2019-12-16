'use strict';
document.addEventListener('DOMContentLoaded', start);
function start() {
  getHeaderHeight();
  document.addEventListener('scroll', readScroll);
}

function readScroll() {
  let scrollPosY = window.pageYOffset;
  const header = document.querySelector('header');
  console.log(scrollPosY);

  scrollPosY >= 171
    ? header.classList.add('bg-black')
    : header.classList.remove('bg-black');
}

function getHeaderHeight() {
  const root = document.documentElement;
  const navigation = document.querySelector('nav');
  const navigationRect = navigation.getBoundingClientRect();
  console.log(navigationRect.height);
  root.style.setProperty('--p-bottom', navigationRect.height + 'px');
}
