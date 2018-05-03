
let allImages = document.getElementsByClassName("all-Images")[0];
let firstImageSource = allImages.children[0].src;

let mainDiv = document.querySelector(".main-showcase");
let mainImage = document.createElement("img");
mainImage.src = firstImageSource;
mainDiv.appendChild(mainImage);

allImages.addEventListener("click", (event) => {
    if(event.target.tagName == "IMG"){
        let source = event.target.src;
        mainImage.src = source;
    }
});





























