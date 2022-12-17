import './less/index.less'

console.log("JS connected");
const images = document.querySelectorAll("img");
const h1 = document.querySelector("h1");
const introImg = document.querySelector(".intro img");
const header = document.querySelector("header");
const links = document.querySelectorAll("a");

images.forEach((el) => {
    el.addEventListener("mouseenter", (evt) => evt.currentTarget.style.border = "1px solid black");
    el.addEventListener("mouseleave", (evt) => evt.currentTarget.style.border = "");
    el.addEventListener("dblclick", toggleImgSize);
});

links.forEach((el) => {
    el.addEventListener("focus", onFocus);
    el.addEventListener("blur", outFocus);
    el.addEventListener("mouseenter", onFocus);
    el.addEventListener("mouseleave", outFocus);
    el.addEventListener("click", linkClick);
});

function onFocus(evt) {
    evt.currentTarget.style.color = "lightblue";
}

function outFocus(evt) {
    evt.currentTarget.style.color = "black";
}

function linkClick(evt) {
    evt.preventDefault();
    console.log("prevent default fired");
    window.location.href = "https://www.youtube.com/";
}

window.addEventListener("load", (evt) => introImg.style.display = "none");
h1.addEventListener("click", toggleBusImg);

function toggleBusImg() {
    if (introImg.style.display==="none") introImg.style.display = "block";
    else introImg.style.display = "none";
}

introImg.addEventListener("mouseover", () => h1.style.color = "darkgray");
introImg.addEventListener("mouseleave", () => h1.style.color = "black");

h1.addEventListener("mouseenter", (evt) => evt.currentTarget.style.color = "darkgray");
h1.addEventListener("mouseleave", (evt) => evt.currentTarget.style.color = "black");

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

function keyDown(evt) {
    if(evt.key == "Shift") h1.style.display = "none";
}

function keyUp(evt) {
    if(evt.key == "Shift") h1.style.display = "block";
}

function toggleImgSize(evt) {
    if(evt.target.style.height=="10%") {
        evt.target.style.height = "auto";
        evt.target.style.maxWidth = "100%";
    }
    else {
        evt.target.style.height = "10%";
        evt.target.style.maxWidth = "10%";
    }
}

document.addEventListener("scroll", onScroll);

function onScroll(evt) {
    header.style.backgroundColor = "lightgray";
    setTimeout(() => {
        header.style.backgroundColor = "white";
    }, 1000);
}