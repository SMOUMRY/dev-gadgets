// Carousel

let counter = 1;

document.querySelector(".pictures-next").addEventListener("click", function(){
    getNextImg();
});
document.querySelector(".pictures-prev").addEventListener("click", function(){
    getPreviousImg();
});

function getNextImg(){
    if (counter < 5) {
        document.querySelector(".pictures-img").setAttribute("src", `img/canard-jaune-${counter + 1}-l.png`);
        counter ++;
    }
    else{
        counter = 0;
        document.querySelector(".pictures-img").setAttribute("src", `img/canard-jaune-${counter + 1}-l.png`);
        counter ++;
    }
}

function getPreviousImg(){
    if (counter <= 5 && counter >= 2) {
        document.querySelector(".pictures-img").setAttribute("src", `img/canard-jaune-${counter - 1}-l.png`);
        counter --;
    }
    else{
        counter = 6;
        document.querySelector(".pictures-img").setAttribute("src", `img/canard-jaune-${counter - 1}-l.png`);
        counter --;
    }
}

// Survol version desktop

const pictures = document.querySelectorAll(".thumbs-img");
console.log(pictures);

pictures.forEach(img =>{
    img.addEventListener('mouseover', function(){
        console.log("image");
        picture = document.querySelector(".pictures-img")
        picture.setAttribute("src", img.dataset.img);
        console.log(img.dataset.img);
    })
})