'use strict';

var allImages = [];
var voteIterations = 0;
var imageNames = [];
var timesClicked = [];
var saveVoteData = [];
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');

var ctx = document.getElementById('my-canvas').getContext('2d');
var chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      label: 'Images',
      data: [],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 0
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

new VoteImageRotator('Bag', 'img/bag.jpg');
new VoteImageRotator('Banana', 'img/banana.jpg');
new VoteImageRotator('Bathroom', 'img/bathroom.jpg');
new VoteImageRotator('Boots', 'img/boots.jpg');
new VoteImageRotator('Breakfast', 'img/breakfast.jpg');
new VoteImageRotator('Bubblegum', 'img/bubblegum.jpg');
new VoteImageRotator('Chair', 'img/chair.jpg');
new VoteImageRotator('Cthulhu', 'img/cthulhu.jpg');
new VoteImageRotator('Dog and Duck', 'img/dog-duck.jpg');
new VoteImageRotator('Dragon', 'img/dragon.jpg');
new VoteImageRotator('Pen', 'img/pen.jpg');
new VoteImageRotator('Pet Sweep', 'img/pet-sweep.jpg');
new VoteImageRotator('Scissors', 'img/scissors.jpg');
new VoteImageRotator('Shark', 'img/shark.jpg');
new VoteImageRotator('Sweep', 'img/sweep.png');
new VoteImageRotator('Tauntaun', 'img/tauntaun.jpg');
new VoteImageRotator('Unicorn', 'img/unicorn.jpg');
new VoteImageRotator('USB', 'img/usb.gif');
new VoteImageRotator('Water Can', 'img/water-can.jpg');
new VoteImageRotator('Wine Glass', 'img/wine-glass.jpg');

function VoteImageRotator(name, imagePath) {
    this.name = name;
    this.imagePath = imagePath;
    this.numClicked = 0;
    this.timesRendered = 0;
    allImages.push(this);
    imageNames.push(this.name)
}

function generateImage() {
    var i = Math.floor(Math.random() * allImages.length);
    while (
        allImages[i].name === img1.name || allImages[i].name === img2.name || allImages[i].name === img3.name
    ) {
        i = Math.floor(Math.random() * allImages.length);
    }
    console.log(allImages[i] + 'return this for generated images');
    return allImages[i];
}

function imageRender() {
    
    var newImg1 = generateImage();
    img1.src = newImg1.imagePath;
    img1.name = newImg1.name;
    newImg1.timesRendered++;
    

    var newImg2 = generateImage();
    img2.src = newImg2.imagePath;
    img2.name = newImg2.name;
    newImg2.timesRendered++;
   

    var newImg3 = generateImage();
    img3.src = newImg3.imagePath;
    img3.name = newImg3.name;
    newImg3.timesRendered++;
   console.log(newImg1 + " " + newImg2 + " " + newImg3);
}

imageRender();

function showResults() {
    var listEl = document.getElementById('ranking');

    for (var i = 0; i < allImages.length; i++) {
        var rank = document.createElement('li');
        var returnMessage = (allImages[i].name + ' recieved ' + allImages[i].numClicked + ' votes and was shown to you ' + allImages[i].timesRendered + ' times.');
        rank.textContent = returnMessage;
        console.log(returnMessage);
        listEl.appendChild(rank);
    }
}

function graphGenerator() {
    for (var indexGraph= 0; indexGraph < allImages.length; indexGraph++) {
        chart.data.labels.push(allImages[indexGraph].name);
        chart.data.datasets[0].data.push(allImages[indexGraph].numClicked);
    }
}

function storeTheData() {
    localStorage.setItem("allimages", JSON.stringify(allImages));
}
console.log(localStorage);

function clickHandler(event) {
    voteIterations++;
    var listEl = document.getElementById('ranking');
    listEl.innerHTML = "";
    // console.log(event);
    for (var i = 0; i < allImages.length; i++) {
        if (allImages[i].name === event.target.name) {
            allImages[i].numClicked++;
            imageRender();
        } if (voteIterations >= 25) {
            img1.removeEventListener('click', clickHandler);
            img2.removeEventListener('click', clickHandler);
            img3.removeEventListener('click', clickHandler);
            event = false;
            alert("That's all the votes we need. See your results and let us know what you think.");
            showResults();
            graphGenerator();
            chart.update();
            storeTheData();
            break;
        }
    }
}

function findTheData() {
    var storedImageAndVoteList = localStorage.getItem("allimages")
        if (storedImageAndVoteList) {
        allImages = JSON.parse(storedImageAndVoteList) 
        var voteIterations = 25;
        img1.removeEventListener('click', clickHandler);
        img2.removeEventListener('click', clickHandler);
        img3.removeEventListener('click', clickHandler);
        event = false;
        showResults();
        graphGenerator();
        chart.update();
    }
}


img1.addEventListener('click', clickHandler);
img2.addEventListener('click', clickHandler);
img3.addEventListener('click', clickHandler);

findTheData();
