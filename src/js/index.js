'use strict';
document.addEventListener('DOMContentLoaded', start);
function start() {
  getHeaderHeight();
  document.addEventListener('scroll', readScroll);
  document.querySelector('#toggle input').addEventListener('click', e => {
    e.target.checked
      ? document
          .querySelector('.mobile .navigation_links')
          .classList.add('showMenu')
      : document
          .querySelector('.mobile .navigation_links')
          .classList.remove('showMenu');
  });
}

function readScroll() {
  const root = document.documentElement;
  const navigation = document.querySelector('nav');
  const navigationRect = navigation.getBoundingClientRect();
  if (navigationRect.height === 0) {
  } else {
    console.log(true);
    let scrollPosY = window.pageYOffset;
    const header = document.querySelector('header');
    scrollPosY >= 171
      ? header.classList.add('bg-black')
      : header.classList.remove('bg-black');
  }
}

function getHeaderHeight() {
  const root = document.documentElement;
  const navigation = document.querySelector('nav');
  const navigationRect = navigation.getBoundingClientRect();
  console.log(navigationRect.height);
  root.style.setProperty('--p-bottom', navigationRect.height + 'px');
}
