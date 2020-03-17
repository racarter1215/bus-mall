'use strict';

var allImages = [];
var voteIterations = 0;

function VoteImageRotator(name, imagePath) {
    this.name = name;
    this.imagePath = imagePath;
    this.numClicked = 0;
    this.timesRendered = 0;
    allImages.push(this);
}

new VoteImageRotator('bag', 'img/bag.jpg');
new VoteImageRotator('banana', 'img/banana.jpg');
new VoteImageRotator('bathroom', 'img/bathroom.jpg');
new VoteImageRotator('boots', 'img/boots.jpg');
new VoteImageRotator('breakfast', 'img/breakfast.jpg');
new VoteImageRotator('bubblegum', 'img/bubblegum.jpg');
new VoteImageRotator('chair', 'img/chair.jpg');
new VoteImageRotator('cthulhu', 'img/cthulhu.jpg');
new VoteImageRotator('dog and duck', 'img/got-duck.jpg');
new VoteImageRotator('dragon', 'img/dragon.jpg');
new VoteImageRotator('pen', 'img/pen.jpg');
new VoteImageRotator('pet sweep', 'img/pet-sweep.jpg');
new VoteImageRotator('scissors', 'img/scissors.jpg');
new VoteImageRotator('shark', 'img/shark.jpg');
new VoteImageRotator('sweep', 'img/sweep.jpg');
new VoteImageRotator('tantrum', 'img/tantrum.jpg');
new VoteImageRotator('unicorn', 'img/unicorn.jpg');
new VoteImageRotator('usb', 'img/usb.jpg');
new VoteImageRotator('water can', 'img/water-can.jpg');
new VoteImageRotator('wine glass', 'img/wine-glass.jpg');

var img1 = document.getElementById('img1');
var img2 = documenet.getElementById('img2');
var img3 = document.getElementById('img3');

