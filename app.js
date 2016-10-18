'use strict';

// Global variables:
var allNames = [
'bag',
'banana',
'bathroom',
'boots',
'breakfast',
'bubblegum',
'chair',
'cthulhu',
'dog_duck',
'dragon',
'pen',
'pet_sweep',
'scissors',
'shark',
'sweep',
'tauntaun',
'unicorn',
'usb',
'water_can',
'wine_glass'];

var allProducts = [];
var clicks = 0;

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');

// Product functions:
function Product(name, position) {
  this.name = name;
  this.id = name;
  this.src = '../assets/' + name + '.jpg';
  this.position = position;
  this.tally = 0;
  allProducts.push(this);
}

function assignProd() {
  for (var i = 0; i < allNames.length; i++) {
    var nom = allNames[i];
    var position = i;
    window[nom] = new Product(nom, position);
  }
}

function randProd() {
  var pic = Math.ceil(Math.random() * 20);
  return allProducts[pic];
}

// DOM rendering functions:
function renderMe() {
  
}

// Do all the things functions:
assignProd();
console.log(allProducts);

randProd();
