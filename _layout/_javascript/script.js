'use strict';
// ! *********** FOR LESSONS NAMES *********** //
// ? *********** FOR REGULAR COMMENTS *********** //
const container = document.getElementById('container');
const colors = ['#9d62b7', '#f3fcda', '#00ff9d', '#ff007b', '#1500ff', '#ffd500'];
const SQUARES = 300;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', function () {
    setColor(square);
  });

  square.addEventListener('mouseout', function () {
    removeColor(square);
  });

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = '0 0 2px black';
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
