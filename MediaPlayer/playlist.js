function Playlist(){
    this.songs = [];
    this.indexOfCurrent = 0;
}

Playlist.prototype.add = function(song){
    this.songs.push(song);
}

Playlist.prototype.play = function(){
    let current = this.songs[this.indexOfCurrent];
    current.playIt();
}

Playlist.prototype.stop = function(){
    let current = this.songs[this.indexOfCurrent];
    current.pauseIt();
}

Playlist.prototype.next = function(){
    let current = this.songs[this.indexOfCurrent];
    current.pauseIt();
    this.indexOfCurrent++;
    if(this.indexOfCurrent == this.songs.length){
        this.indexOfCurrent = 0;
    }
    current = this.songs[this.indexOfCurrent];
    current.playIt();
}

Playlist.prototype.renderHTML = function (list){
    list.innerHTML = "";
    for(let i = 0; i < this.songs.length; i++){
        list.appendChild(this.songs[i].inHTML());
    }
}