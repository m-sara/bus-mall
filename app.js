'use strict';

// Global variables:
var allDesc = [
  '',
  // Bag
  'The Stormtroopers chased Luke Skywalker and his astromech droid all over the spaceport. Luke and Artoo split up, which made the pursuit all the more difficult. A squad of Troopers found R2-D2 (or so they thought) outside a bathroom stall. When they went to apprehend the droid, the Star Wars R2-D2 Carry-On Luggage\'s owner (a very short-tempered Aqualish), forced the Stormtroopers out of the bathroom. In the confusion, Luke and the real Artoo escaped. All because of the Star Wars R2-D2 Carry-On Luggage. It\'s the best carry-on bag you could ever hope for. As R2-D2 protected Luke, so will this Star Wars R2-D2 Carry-On Luggage protect your underwear, shirts, socks, toothbrush, and everything else you need on your travels. It\'s got a telescoping handle and 360 swivel wheels for quick maneuvering in any air, sea, or spaceport you happen to be traveling to (or from).',
  // Banana
  'This easy-to-use Banana Slicer provides a quick solution to slice a banana uniformly each and every time. Simply press the slicer on a peeled banana and the work is done. Safe, fun and easy for children to use.',
  // Bathroom
  'This tablet stand provides a convenient way to comfortably enjoy apps, eBooks, videos and web browsing at home. The bendable gooseneck stand allows you to adjust to any viewing angle, orientation or position you may need and securely holds the tablet. The elegant chrome pedestal also features an optional toilet paper roll holder and a solid heavyweight base that will stay in place.',
  // Boots
  'Katerina Kamprani decided to create and design for all the wrong reasons. Vindictive and nasty? Or a helpful study of everyday objects? Her goal was to re- design useful objects making them uncomfortable but usable and maintain the semiotics of the original item.',
  // Breakfast
  'What\'s better than having coffee, eggs, pancakes, and toasted pastries? Being able to make them all with one machine! Meet the 3-in-1 breakfast station, which features a coffee maker, a griddle, and a fully functional toaster oven, all in one compact package! The size and durability makes it perfect for a dorm room, bachelor pad, or any kitchen in which counter space is important.',
  // Bubblegum
  'If you\'ve ever wished that someone would invent bubble gum that looks like meatballs, well you\'re in luck, there\'s now hearty Italian style Meatball Bubble Gum. These fully cooked and extra chewy gumballs look just like real meatballs, but thankfully taste like regular bubble gum. You could mix them in with real meatballs at dinner and see if anyone notices.',
  // Chair
  'Katerina Kamprani decided to create and design for all the wrong reasons. Vindictive and nasty? Or a helpful study of everyday objects? Her goal was to re- design useful objects making them uncomfortable but usable and maintain the semiotics of the original item.',
  // Cthulhu
  'The Great Old One shall return to rule the earth… but not if the Professor has anything to say about it! Will Cthulhu defeat the Professor… YOU DECIDE! Cthulhu stands at a mighty 12 inches tall, towering above your standard action figures. Move Cthulhu’s head, legs, arms and wrists. Legends of Cthulhu figures fit in Cthulhu\'s hand!',
  // Dog_Duck
  'It might well often be compulsory for your pooch to wear a muzzle when out and about, but that doesn\'t mean it needs to be boring! Bright, fun and with a touch of the bizarre, these Dog Muzzles will transform your familiar canine friend into a designer semi-duck "billed" dog.',
  // Dragon
  'Just one can of delicious, slightly charred dragon meat contains 100% of your daily value of havoc, terror, inferno, destruction, magic, and rage. Also contains trace amounts of poetry and ballet. Note: Dragon meat is precooked for instant victory feasts. Dimensions: 4" diameter. Warning: (SPOILERS!) This is not an actual food item and is non-edible. There\'s a stuffed dragon head inside the can.',
  // Pen
  'Taking after the classic Bic ball-point pens we know and love, the pens in this set come with caps in the shape of a fork, knife and spoon, each doubling as a blue ball-point pen. Pen caps are so easy to lose, but when they’re shaped like silverware you\'re more likely to find them. So whether you\'re at a lunch meeting, or don\'t have time to sit down and have a real lunch because you\'re too productive at work, be prepared with a set of cutlery',
  // Pet Sweep
  'Todd Lawson\'s Pet Sweep comes with four dust boots that will fit most paws. Just slip them on their paws and the micro fiber strands will pick up dust, insects and hair (most likely their own) wherever they walk!',
  // Scissors
  'These scissors re-invent the pizza wheel by cleverly combining two precision- ground blades that create perfect cuts with a nifty spatula on the bottom blade that slides under the pizza protecting your cooking surface and non-stick cookware. It\'s also brilliant for cutting fabric, pastry and an endless list of household items without worrying about scratching the kitchen table or cutting the carpet or bed sheets when you wrap presents.',
  // Shark
  'You\'ll be sleeping with the fishes with this shark sleeping bag. This sleeping bag also works well as a body pillow or as the most threatening weapon you can wield in a pillow fight, and makes a cool gift to compliment a shark week marathon sleepover party.',
  // Sweep
  'Let Your baby help clean the house! Use the mobility of your baby and let it take on some household chores early in life. Its wiggling, crawling, and rolling-over efforts will be beneficial for your toddler as well as for your floor, because the mop fibers protect the fine tissue and the tender bones of your offspring while it cleans your floor.',
  // Tauntaun
  'Desperate times call for desperate measures – the only way to survive the cold night is to use your lightsaber to cut open this Tauntaun and use it as a blanket! This Tauntaun sleeping bag is great for geeky sleepovers and makes a cool gift for Star Wars fans.',
  // Unicorn
  '5.5 ounces of delicious unicorn meat, canned for your convenience. Crunchy horn bits in every bite - an excellent source of Calcium! Tastes like rotisserie chicken but with a hint of marshmallow sweetness. Easily spreadable for sandwiches, hors d\'oeuvres, and more!. Sparkly meat lends an unmistakable air of class and sophistication to your parties. Unlike other meats, unicorn fat is polyunsaturated and lowers your LDL cholesterol. Not yet approved by the USDA or FDA, but the nuns have eaten it for centuries and they\'re healthy as horses...Okay, for real: you can\'t eat this. It\'s a dismembered stuffed unicorn in a can.',
  // USB
  'Show your love for Cthulhu (or just octopuses or kraken) with the USB Squirming Tentacle. Simply plug it into your USB port and it will fill your computer with unspeakable evils. Just kidding, it doesn\'t store any data. (Just evil.) The USB Squirming Tentacle will draw a small amount of power from your computer, enabling it to squirm and wiggle like an Elder God trying to escape your laptop.',
  // Water Can
  'Katerina Kamprani decided to create and design for all the wrong reasons. Vindictive and nasty? Or a helpful study of everyday objects? Her goal was to re- design useful objects making them uncomfortable but usable and maintain the semiotics of the original item.',
  // Wine Glass
  'Katerina Kamprani decided to create and design for all the wrong reasons. Vindictive and nasty? Or a helpful study of everyday objects? Her goal was to re- design useful objects making them uncomfortable but usable and maintain the semiotics of the original item.'
];

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

var allProducts = [];
var clicks = 0;
var index1;
var index2;
var index3;

var tallies = [];


var bodyEl = document.getElementById('body');
var imgLineEl = document.getElementById('imageLine');
var img1El = document.getElementById('img1');
var cap1El = document.getElementById('cap1');
var img2El = document.getElementById('img2');
var cap2El = document.getElementById('cap2');
var img3El = document.getElementById('img3');
var cap3El = document.getElementById('cap3');
var buttonLineEl = document.getElementById('buttonLine');
var resetEl = document.getElementById('reset');
var scoresEl = document.getElementById('scores');
var listEl = document.createElement('ul');
var seeThisEl = document.getElementById('seeThis');
var lookAListEl = document.getElementById('lookAList');
var lookAGraphEl = document.getElementById('lookAGraph');
var context = document.getElementById('canvas').getContext('2d');
// context.canvas.width = 50;
// context.canvas.height = 50;




function createBarData() {
  // barData.labels = [];
  for (var i = 1; i < allProducts.length; i++) {
    tallyGraph.data.labels.push(allProducts[i].title);
    tallies.push(allProducts[i].tally);
  }
  tallyGraph.update();
}



var tallyGraph = new Chart(context, {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      label: 'Clicks',
      data: tallies,
      backgroundColor: 'rgba(0, 0, 0, .3)'
    }],
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    scaleBeginAtZero: true,
    // scaleFontColor: 'rgba(0, 0, 0, .3)',
    scales: {
      yAxes: [{
        ticks: {
          stepSize: 1
        }
      }]
    }
  }
});

// Product functions:
function Product(name, position, i) {
  this.name = name.toLowerCase();
  this.id = this.name;
  this.title = name.replace('_', ' ');
  if (name === 'USB') {
    this.src = 'assets/' + this.name + '.gif';
  }
  else {
    this.src = 'assets/' + this.name + '.jpg';
  }
  this.description = allDesc[i];
  this.position = position;
  this.tally = 0;
  allProducts.push(this);
}

function assignProd() {
  for (var i = 0; i < allNames.length; i++) {
    var nom = allNames[i];
    var position = i;
    window[nom] = new Product(nom, position, i);
  }
}

function randProd() {
  index1 = Math.ceil(Math.random() * 20);
  // console.log('1st #: ' + index1);
  index2 = Math.ceil(Math.random() * 20);
  // console.log('2nd #: ' + index2);
  index3 = Math.ceil(Math.random() * 20);
  // console.log('3rd #: ' + index3);

  if (index1 === index2 || index1 === index3 || index2 === index3) {
    // console.log('Oops!');
    randProd();
  }

  img1El.setAttribute('src', allProducts[index1].src);
  img1El.setAttribute('alt', allProducts[index1].title);
  img2El.setAttribute('src', allProducts[index2].src);
  img2El.setAttribute('alt', allProducts[index2].title);
  img3El.setAttribute('src', allProducts[index3].src);
  img3El.setAttribute('alt', allProducts[index3].title);
}

function setClicker() {

  img1El.addEventListener('click', function(){imgClick(index1);});
  cap1El.textContent = allDesc[index1];
  img2El.addEventListener('click', function(){imgClick(index2);});
  cap2El.textContent = allDesc[index2];
  img3El.addEventListener('click', function(){imgClick(index3);});
  cap3El.textContent = allDesc[index3];

  console.log(img1El);
  console.log(img2El);
  console.log(img3El);
}

function imgClick(index) {

  if (clicks === 15) {
    img1El.removeEventListener('click', imgClick);
    img2El.removeEventListener('click', imgClick);
    img3El.removeEventListener('click', imgClick);
    clicks++;
    showTallies();
  }

  else if (clicks > 15) {
    // alert('No more clicks!');
  }

  else {
    clicks++;
    console.log('Clicks: ' + clicks);
    allProducts[index].tally++;
    console.log(allProducts[index].name + ' tally: ' + allProducts[index].tally)
    randProd();
  }
}

function refresh() {
  clicks = 0;
  window.location.reload();
}

function showTallies() {

  resetEl.style.display = 'inline-block';
  resetEl.addEventListener('click', refresh);
  buttonLineEl.appendChild(resetEl);
  imgLineEl.appendChild(buttonLineEl);

  var hereEl = document.createElement('div');
  hereEl.textContent = 'Here\'s what you chose:';
  // hereEl.style.display = 'inline';
  scoresEl.appendChild(hereEl);

  for (var i = 1; i < allProducts.length; i++) {
    var bulletEl = document.createElement('li');
    bulletEl.textContent = allProducts[i].title + ': ' + allProducts[i].tally;
    listEl.appendChild(bulletEl);
    hereEl.appendChild(listEl);
  }

  seeThisEl.style.display = 'inline-block';
  seeThisEl.textContent = 'see this in a graph';
  seeThisEl.addEventListener('click', seeGraph);
}







function seeGraph() {
  createBarData();
  lookAListEl.style.display = 'none';
  lookAGraphEl.style.display = 'inline-block';
  seeThisEl.textContent = 'see this in a list';
  seeThisEl.removeEventListener('click', seeGraph);
  seeThisEl.addEventListener('click', seeList);
}

function seeList() {
  lookAGraphEl.style.display = 'none';
  lookAListEl.style.display = 'block';
  seeThisEl.textContent = 'see this in a graph';
  seeThisEl.removeEventListener('click', seeList);
  seeThisEl.addEventListener('click', seeGraph);
}


// Do all the things functions:

// resetEl.style.display = 'none';
// seeThisEl.style.display = 'none';
lookAGraphEl.style.display = 'none';

assignProd();
randProd();
setClicker();
// tallyGraph.update();
