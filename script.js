let block = document.getElementsByClassName("block");
let paragraphs = document.getElementsByTagName("p");
let filter = document.querySelectorAll(".catalog .filter")
let buy = document.getElementsByClassName("buy");
let remove = document.getElementsByClassName("remove")

let addfavorite = document.getElementsByClassName("favorite");

let aalert = document.getElementsByClassName("alert");


let pay = document.getElementsByClassName("pay-buttons");

let cards = document.getElementsByClassName("card");
let basketelements = document.getElementsByClassName("basket");


let favoriteelements = document.getElementsByClassName("favoriteadd");


let basket;
let basketempty = localStorage.getItem("basketempty");

let favorite;
let favoriteempty = localStorage.getItem("favoriteempty")

// write the basket
setInterval(() => {
    if (basketempty == null) localStorage.setItem("basketempty", true)
    else localStorage.setItem("basketempty", false)
    if (basketempty == false) {
        localStorage.setItem("basket", basket.join(""))
    }
    else if (basket = []) {
        basket = localStorage.getItem("basket").split(",")
    }
    else basket = []
    if (localStorage.getItem("basket") == "" || localStorage.getItem("basket") == null) {
        basketempty = true;
    }
    console.log(basket)
}, 1000)

// write the favorite
setInterval(() => {
    if (favoriteempty == null) localStorage.setItem("favoriteempty", true)
    else localStorage.setItem("favoriteempty", false)
    if (favoriteempty == false) {
        localStorage.setItem("favorite", favorite.join(""))
    }
    else if (favorite = []) {
        favorite = localStorage.getItem("favorite").split(",")
    }
    else favorite = []
    if (localStorage.getItem("favorite") == "" || localStorage.getItem("favorite") == null) {
        favoriteempty = true;
    }
    console.log(basket)
}, 1000)

for (let i = 0; i < block.length; i++) {
    block[i].addEventListener("mouseenter", () => {
        paragraphs[i].style.top = "70%";
        paragraphs[i].style.opacity = "1";
        filter[i].style.opacity = "1";
    });
    block[i].addEventListener("mouseleave", () => {
        paragraphs[i].style.top = "90%";
        paragraphs[i].style.opacity = "0";
        filter[i].style.opacity = "0";
    });
}

for (let i = 0; i < buy.length; i++) {
    buy[i].addEventListener("click", () => {
        aalert[0].classList.add("alert-anim");
        basket.push(cards[i].outerHTML);
        basketempty = false;
        setTimeout(() => {
            success[0].classList.remove("alert-anim");
        }, 5000)
    })
}

for (let i = 0; i < addfavorite.length; i++) {
    addfavorite[i].addEventListener("click", () => {
        aalert[1].classList.add("alert-anim");
        favorite.push(cards[i].outerHTML);
        favoriteempty = false;
        setTimeout(() => {
            aalert[1].classList.remove("alert-anim");
        }, 5000)
    })
}

function buybasket() {
    localStorage.setItem("basket", "");
    window.open("success.html");
}