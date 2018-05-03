function Media(title, duration){
    this.title = title;
    this.duration = duration;
    this.isPlaying = false;
}

Media.prototype.playIt = function (){
    this.isPlaying = true;
}

Media.prototype.pauseIt = function(){
    this.isPlaying = false;
}





