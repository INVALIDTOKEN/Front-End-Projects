function Song(title, artist, duration){
    let song = this;
    Media.call(song, title, duration);
    this.artist = artist; 
}
Song.prototype = Object.create(Media.prototype);

Song.prototype.inHTML = function(){
    let htmlString = document.createElement("li");
    htmlString.id = "song";
    if(this.isPlaying == true){
        htmlString.className = "current";
    }else{
        htmlString.className = "pause";
    }

    htmlString.textContent = this.title + " - " + this.artist;
    let span = document.createElement("span");
    span.textContent = this.duration;
    span.className = "duration";
    htmlString.appendChild(span);
    return htmlString;
}
  