let ol = document.getElementById("playlist");
let playOne = new Playlist();

let songOne = new Song("Kabhi Kabhi Mere Dil Mae", "Amitab bachan", "3:00");
let songTwo = new Song("Aa Bhi ja", "Arijit singh", "5:00");
let songThree = new Song("Halla rae", "Sonu nigam", "3:00");
let songFour = new Song("Halla rae", "Sonu nigam", "3:00");

let MovieOne = new Movies("Zindagi na milegi dobara", "3:12:00", "2014");

playOne.add(songOne);
playOne.add(songTwo);
playOne.add(songThree);
playOne.add(songFour);
playOne.add(MovieOne);

let play = document.getElementById("play");
play.addEventListener("click", (event) => {
  playOne.play();
  playOne.renderHTML(ol);
});

let next = document.getElementById("next");
next.addEventListener("click", (event) => {
  playOne.next();
  playOne.renderHTML(ol);
});

let stop = document.getElementById("stop");
stop.addEventListener("click", (event) => {
  playOne.stop();
  playOne.renderHTML(ol);
});

playOne.renderHTML(ol);
