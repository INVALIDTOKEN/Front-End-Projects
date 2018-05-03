
let imageIndex = 0;
let imagesName = ["codeone", "codetwo", "codethree", "codefour", "codefive", "codesix"];

let div = document.getElementsByClassName("image-container")[0];
div.style.backgroundImage = `url(img/${imagesName[imageIndex]}.jpg)`;

let dotDiv = document.getElementsByClassName("dots")[0];
let arrows = div.getElementsByTagName("img");

// FUNCTION TO CREATE DOTES

const createDotes = (imagesName) => {
    imagesName.forEach((element, index) => {
        let image = document.createElement("img");
        image.src = "icons/dot.png";
        dotDiv.appendChild(image);
    });

    let allDots = dotDiv.children;
    for(let i = 0; i < allDots.length; i++){
        allDots[i].addEventListener("click", (event) => {
            console.log(i);
            div.style.backgroundImage = `url(img/${imagesName[i]}.jpg)`;
            imageIndex = i;
            glowDots(imageIndex);
        });
    }
}
createDotes(imagesName);

const glowDots = (index) => {
    let dots = dotDiv.children;
    for(let i = 0; i < dots.length; i++){
        
        if(i == index){
            dots[i].className = "active"
        }else{
            dots[i].className = "unactive";
        }
    }
};

arrows[0].addEventListener("click", (event) => {
    
    if(imageIndex == 0){
        imageIndex = imagesName.length;
    }
    --imageIndex;
    div.style.backgroundImage = `url("img/${imagesName[imageIndex]}.jpg")`;
    glowDots(imageIndex);

});

arrows[1].addEventListener("click", (event) => {
    
    if(imageIndex == imagesName.length - 1){
        imageIndex = -1;
    }
    ++imageIndex;
    div.style.backgroundImage = `url("img/${imagesName[imageIndex]}.jpg")`;
    glowDots(imageIndex);
});

glowDots(imageIndex);























