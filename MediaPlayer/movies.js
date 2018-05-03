function Movies(title, duration, year){
    Media.call(this, title, duration);
    this.year = year;
}

Movies.prototype = Object.create(Media.prototype);

Movies.prototype.inHTML = function(){
    let htmlString = document.createElement("li");
    htmlString.id = "movie";
    if(this.isPlaying == true){
        htmlString.className = "current";
    }else{
        htmlString.className = "pause";
    }

    htmlString.textContent = `${this.title} - ( ${this.year} )`;
    let span = document.createElement("span");
    span.textContent = this.duration;
    span.className = "duration";
    htmlString.appendChild(span);
    return htmlString;
}
