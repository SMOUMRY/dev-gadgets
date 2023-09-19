// Carousel

let counter = 1;
let newCounter = 1;

document.querySelector(".pictures-next").addEventListener("click", function(){
    getNextImg();
});
document.querySelector(".pictures-prev").addEventListener("click", function(){
    getPreviousImg();
});

function getNextImg(){
    if (counter < 5) {
        counter ++;
        document.querySelector(".pictures-img").setAttribute("src", `img/canard-jaune-${counter}-l.png`);
    }
    else{
        counter = 1;
        document.querySelector(".pictures-img").setAttribute("src", `img/canard-jaune-${counter}-l.png`);
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

pictures.forEach(img =>{
    img.addEventListener('mouseover', function(){
        picture = document.querySelector(".pictures-img")
        picture.setAttribute("src", img.dataset.img);
    })
})

document.querySelector('.add-cta').addEventListener('click', function(){
    if (document.querySelector('.add-qty').value <= 99) document.querySelector('.cart-nb').textContent = document.querySelector('.add-qty').value;
    else document.querySelector('.cart-nb').textContent = "99+"
    document.querySelector('.add-cta').textContent = document.querySelector('.add-cta').dataset.cta
    document.querySelector('.add-cta').classList.add("active-cta");
    document.querySelector('.add-cta').disabled = true;
})

function getInformation() {
    document.querySelectorAll('.product-subttl').forEach(title =>{
        title.addEventListener('click', function(event){
            if (event.target.classList.contains("number1")){
                document.querySelector('.product-advantages').classList.toggle("active");
                event.target.classList.toggle("closed");
                localStorage.setItem('refresh', event.target.classList);
                localStorage.setItem('hidden', document.querySelector('.number1').classList);
            } 
            if (event.target.classList.contains("number2")){
                document.querySelector('.product-car').classList.toggle("active");
                event.target.classList.toggle("closed");
                localStorage.getItem(event.target);
                localStorage.setItem('refresh2', document.querySelector('.number2').classList);
            } 
        })
    })
}

getInformation();

window.addEventListener('load', function () {
    let reload = localStorage.getItem('refresh');
    let reload2 = localStorage.getItem('refresh2');
    if (reload.includes('closed')){
        document.querySelector('.number1').classList.toggle("closed");
        document.querySelector('.product-advantages').classList.toggle("active");
    }
    if (reload2.includes('closed')){
        document.querySelector('.number2').classList.toggle("closed");
        document.querySelector('.product-car').classList.toggle("active");
    }
});

let carousel = document.querySelectorAll('.similar-itm');

function getNextItem(){
    document.querySelector('.pictures-next2').addEventListener('click', function(){
        console.log(carousel[newCounter]);
        if (newCounter === 3 ) document.querySelector('.pictures-next2').classList.add("button");
        if (carousel[newCounter].classList.contains('similar-item')){
            carousel[newCounter].classList.remove('similar-item');
            carousel[newCounter - 1].classList.add('similar-item');
            newCounter++;
        }
    });
}
function getPrevItem(){
    document.querySelector('.pictures-prev2').addEventListener('click', function(){
        console.log(carousel[newCounter]);
        if (newCounter === 1 ) document.querySelector('.pictures-prev2').classList.add("button");
        if (carousel[newCounter].classList.contains('similar-item')){
            carousel[newCounter].classList.remove('similar-item');
            carousel[newCounter - 1].classList.add('similar-item');
            newCounter--;
        }
    });
}

getNextItem();
getPrevItem();