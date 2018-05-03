
let imageIndex = 0;
let mainContainer = document.querySelector(".image-container");
let allImages = document.querySelectorAll(".image-container img");
let dotDiv = document.querySelector(".dots");
let arrows = document.querySelectorAll(".arrows img");

allImages.forEach((element) => {
    let dotElement = document.createElement("img");
    dotElement.src = "icons/dot.png";
    dotDiv.appendChild(dotElement)
    element.style.display = "none";
});

let allDots = dotDiv.querySelectorAll("img");

let glow = (check) =>{
    allDots.forEach((element, index) => {
        if(index == check){
            element.className = "glow";
        }else{
            element.className = "dontGlow";
        }
    });
}


allDots.forEach((element, index) => {
    element.addEventListener("click", (event) => {
        mainContainer.style.backgroundImage = `url("${allImages[index].src}")`
        imageIndex = index;
        glow(imageIndex);
    });
});


// INITIAL LOAD UP
let image = allImages[0];
mainContainer.style.backgroundImage = `url("${image.src}")`;

// ARROW FUNCTIONALITY 

arrows[0].addEventListener("click", (event) => {
    if(imageIndex == 0){
        imageIndex = allImages.length;
    }
    --imageIndex;
    mainContainer.style.backgroundImage = `url("${allImages[imageIndex].src}")`;
    glow(imageIndex);
});

arrows[1].addEventListener("click", (event) => {
    if(imageIndex == allImages.length - 1){
        imageIndex = -1;
    }
    ++imageIndex;
    mainContainer.style.backgroundImage = `url("${allImages[imageIndex].src}")`;
    glow(imageIndex);
});


// Initial load up glow
glow(imageIndex);


















