'use strict';

// Global variables:
var allNames = [
  '',
'Bag',
'Banana',
'Bathroom',
'Boots',
'Breakfast',
'Bubblegum',
'Chair',
'Cthulhu',
'Dog_Duck',
'Dragon',
'Pen',
'Pet_Sweep',
'Scissors',
'Shark',
'Sweep',
'Tauntaun',
'Unicorn',
'USB',
'Water_Can',
'Wine_Glass'];

var allDesc = [];

var allProducts = [];
var clicks = 0;

var imgLineEl = document.getElementById('imageLine');
var img1El = document.createElement('img');
var img2El = document.createElement('img');
var img3El = document.createElement('img');

// Product functions:
function Product(name, position) {
  this.name = name.toLowerCase();
  this.id = this.name;
  this.title = name.replace('_', ' ');
  if (name === 'USB') {
    this.src = 'assets/' + this.name + '.gif';
  }
  else {
    this.src = 'assets/' + this.name + '.jpg';
  }
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
  var index1 = Math.ceil(Math.random() * 20);
  console.log('1st #: ' + index1);
  var index2 = Math.ceil(Math.random() * 20);
  console.log('2nd #: ' + index2);
  var index3 = Math.ceil(Math.random() * 20);
  console.log('3rd #: ' + index3);

  if (index1 === index2 || index1 === index3 || index2 === index3) {
    console.log('Oops!')
    randProd();
  }

  else {
    img1El.setAttribute('src', allProducts[index1].src);
    img1El.setAttribute('alt', allProducts[index1].title);
    // img1El.setAttribute('onclick', imgClick());
    img2El.setAttribute('src', allProducts[index2].src);
    img2El.setAttribute('alt', allProducts[index2].title);
    img3El.setAttribute('src', allProducts[index3].src);
    img3El.setAttribute('alt', allProducts[index3].title);
  }
  imgLineEl.appendChild(img1El);
  imgLineEl.appendChild(img2El);
  imgLineEl.appendChild(img3El);
  console.log(img1El);
  console.log(img2El);
  console.log(img3El);
}

// function imgClick(event) {
//   var imgId = event.target.id;
//   console.log(imgId);
//   var imgAlt = event.target.alt;
//   console.log(imgAlt);
// }

// Do all the things functions:
assignProd();
console.log(allProducts);
randProd();
