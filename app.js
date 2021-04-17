console.log("yay!");

let theAudio = document.querySelector(".audio1"),
  theAudio2 = document.querySelector(".audio2"),
  theAudio3 = document.querySelector(".audio3"),
  controlButtonsTop = document.querySelectorAll(".audio-controls1 button"),
  controlButtonsMiddle = document.querySelectorAll(".audio-controls2 button"),
  controlButtonsBottom = document.querySelectorAll(".audio-controls3 button"),
  albumArt = document.querySelectorAll(".track-ref");

function loadTrackTop() {
  let targetTrack = this.dataset.trackref;
  theAudio.src = `audio/${targetTrack}.mp3`;
  theAudio.loop = true;
  theAudio.load();
  theAudio.play();
  playTrackTop();
  theAudio.volume = 0.5;
}

function loadTrackMiddle() {
  let targetTrack = this.dataset.trackref;
  theAudio2.src = `audio/${targetTrack}.mp3`;
  theAudio2.loop = true;
  theAudio2.volume = 0.5;
  theAudio2.load();
  theAudio2.play();
  playTrackMiddle();
}

function loadTrackBottom() {
  let targetTrack = this.dataset.trackref;
  theAudio3.src = `audio/${targetTrack}.mp3`;
  theAudio3.volume = 0.5;
  theAudio3.loop = true;
  theAudio3.load();
  theAudio3.play();

  playTrackBottom();
}

function rewindTrackTop() {
  theAudio.currentTime = 0;
}

function stopTrackTop() {
  theAudio.pause();
}

function playTrackTop() {
  theAudio.play();
}

function rewindTrackMiddle() {
  theAudio2.currentTime = 0;
}

function stopTrackMiddle() {
  theAudio2.pause();
}

function playTrackMiddle() {
  theAudio2.play();
}

function rewindTrackBottom() {
  theAudio3.currentTime = 0;
}

function stopTrackBottom() {
  theAudio3.pause();
}

function playTrackBottom() {
  theAudio3.play();
}

for (cover of albumArt) {
  // debugger;
  cover.addEventListener("click", loadTrackTop);
}

controlButtonsTop[0].addEventListener("click", playTrackTop);
controlButtonsTop[1].addEventListener("click", stopTrackTop);
controlButtonsTop[2].addEventListener("click", rewindTrackTop);

controlButtonsMiddle[0].addEventListener("click", playTrackMiddle);
controlButtonsMiddle[1].addEventListener("click", stopTrackMiddle);
controlButtonsMiddle[2].addEventListener("click", rewindTrackMiddle);

controlButtonsBottom[0].addEventListener("click", playTrackBottom);
controlButtonsBottom[1].addEventListener("click", stopTrackBottom);
controlButtonsBottom[2].addEventListener("click", rewindTrackBottom);

const gameBoard = document.querySelector("#dragZone");

// const dropZones

function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id);
}
function dragOver(event) {
  event.preventDefault();
}
function dropRightTop(event) {
  const data = event.dataTransfer.getData("text");
  const draggableEl = document.getElementById(data);
  const dropZone = document.querySelector(".dropBox1.drop-zone");
  const old = dropZone.querySelector("img");

  if (old) {
    alert("!already exist!");
  } else {
    event.target.appendChild(draggableEl);
    draggableEl.addEventListener("dragend", loadTrackTop);
  }

  event.dataTransfer.clearData();
}
function dropRightMiddle(event) {
  const data = event.dataTransfer.getData("text");
  const draggableEl = document.getElementById(data);
  const dropZone = document.querySelector(".dropBox2.drop-zone");
  const old = dropZone.querySelector("img");

  if (old) {
    alert("!already exist!");
  } else {
    event.target.appendChild(draggableEl);
    draggableEl.addEventListener("dragend", loadTrackMiddle);
  }

  event.dataTransfer.clearData();
}

function dropRightBottom(event) {
  const data = event.dataTransfer.getData("text");
  const draggableEl = document.getElementById(data);
  const dropZone = document.querySelector(".dropBox3.drop-zone");
  const old = dropZone.querySelector("img");

  if (old) {
    alert("!already exist!");
  } else {
    event.target.appendChild(draggableEl);
    draggableEl.addEventListener("dragend", loadTrackBottom);
  }
  event.dataTransfer.clearData();
}

function dropLeftTop(event) {
  const data = event.dataTransfer.getData("text");
  const draggableEl = document.getElementById(data);
  event.target.appendChild(draggableEl);
  draggableEl.addEventListener("dragend", stopTrackTop);
  event.dataTransfer.clearData();
}
function dropLeftMiddle(event) {
  const data = event.dataTransfer.getData("text");
  const draggableEl = document.getElementById(data);
  event.target.appendChild(draggableEl);
  draggableEl.addEventListener("dragend", stopTrackMiddle);
  event.dataTransfer.clearData();
}
function dropLeftBottom(event) {
  const data = event.dataTransfer.getData("text");
  const draggableEl = document.getElementById(data);
  event.target.appendChild(draggableEl);
  draggableEl.addEventListener("dragend", stopTrackBottom);

  event.dataTransfer.clearData();
}

// volume
let volumeSlider = document.querySelector("#volume");
volumeSlider.oninput = function () {
  theAudio.volume = parseFloat(this.value / 100);
};
let volumeSlider2 = document.querySelector("#volume2");
volumeSlider2.oninput = function () {
  theAudio2.volume = parseFloat(this.value / 100);
};
let volumeSlider3 = document.querySelector("#volume3");
volumeSlider3.oninput = function () {
  theAudio3.volume = parseFloat(this.value / 100);
};
