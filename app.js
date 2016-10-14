'use strict';

var allNames = [
'bag',
'banana',
'bathroom',
'boots',
'breakfast',
'bubblegum',
'chair',
'cthulhu',
'dog-duck',
'dragon',
'pen',
'pet-sweep',
'scissors',
'shark',
'sweep',
'tauntaun',
'unicorn',
'usb',
'water-can',
'wine-glass'];

var allProducts = [];


function Product(name) {
  this.name = name,
  this.id = name,
  // this.srcStr =
  this.src = '../assets/' + name + '.jpg',
  this.tally = 0,
  allProducts.push(this),

  this.assignProd = function() {
    for (i = 0; i < allNames.length; i++) {


    }
  }
}


var bag = new Product('bag');
var banana = new Product('banana');
var bathroom = new Product('bathroom');
var boots = new Product('boots');
var breakfast = new Product('breakfast');
var bubblegum = new Product('bubblegum');
var chair = new Product('chair');
var cthulhu = new Product('cthulhu');
var dog_duck = new Product('dog-duck');
var dragon = new Product('dragon');
var pen = new Product('pen');
var pet_sweep = new Product('pet-sweep');
var scissors = new Product('scissors')
var shark = new Product('shark');
var sweep = new Product('sweep');
var tauntaun = new Product('tauntaun');
var unicorn = new Product('unicorn');
var usb = new Product('usb');
var water_can = new Product('water_can');
var wine_glass = new Product('wine_glass');

console.log(allProducts);
