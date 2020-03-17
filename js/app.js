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

function generateImage() {
    var i = Math.floor(Math.random() * allImages.length);
    while (
        allImages[i].name === img1.name || allImages[i].name === img2.name || allImages[i].name === img3.name
    ) {
        index = Math.floor(Math.random() * allImages.length);
    }
    return allImages[i];
}

function imageRender() {
    
    var newImg1 = generateImage();
    img1.src = newImg1.imagePath;
    img1.name = newImg1.name;
    newImg1.timesRendered++;
    voteIterations = voteIterations++;

    var newImg2 = generateImage();
    img2.src = newImg2.imagePath;
    img2.name = newImg2.name;
    newImg2.timesRendered++;
    voteIterations = voteIterations++;

    var newImg3 = generateImage();
    img3.src = newImg3.imagePath;
    img3.name = newImg3.name;
    newImg3.timesRendered++;
    voteIterations = voteIterations++;
}

imageRender();

function showResults() {
    var listEl = document.getElementById('ranking');

    for (var i = 0; i < allImages.length; i++) {
        var rank = document.createElement('li');
        var returnMessage = (allImages[i].name + 'recieved ' + allImages[i].numClicked + 'votes and was shown to you ' + allImages[i].timesRendered + 'times.');
        rank.textContent = 'message';
        listEl.appendChild(ranker);
    }
}

function clickHandler(event) {
    var listEl = document.getElementById('ranking');
    listEl.innerHTML = "";

    for (var i = 0; i < allImages.length; i++) {
        if (allImages[i].name === event.target.name) {
            allImages[i].numClicked++;
            voteIterations++;
        } if (voteIterations === 25) {
            event = false;
            alert("That's all the votes we need. See your results and let us know what you think.");
            showResults();
            break;
        }
    }
    generateImage();
}

img1.addEventListener('click', clickHandler);
img2.addEventListener('click', clickHandler);
img3.addEventListener('click', clickHandler);