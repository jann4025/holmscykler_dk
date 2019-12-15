'use strict';
document.addEventListener('DOMContentLoaded', start);
function start() {
  getHeaderHeight();
}

function getHeaderHeight() {
  const root = document.documentElement;
  const navigation = document.querySelector('nav');
  const navigationRect = navigation.getBoundingClientRect();
  console.log(navigationRect.height);
  root.style.setProperty('--p-bottom', navigationRect.height + 'px');
}
