//typing
var typed = new Typed(".input", {
    strings:['Shayan Mahnam.', 'Full Stack Developer.'],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
});
//night mode
var chngClr = document.getElementById("chng-clr");
var darkText = document.getElementById("dark-text");
var wire = document.getElementById("wire");
var pic = document.getElementById("pic");
var logo = document.getElementById("logo");
const audio = new Audio();
audio.src = "./sounds/click2.mp3";

chngClr.onclick = function(){
    document.body.classList.toggle("dark-theme");
    audio.currentTime = 0;
    audio.load();
    audio.play();
    wire.style.height = "80px";
    if (document.body.classList.contains("dark-theme")) {
        darkText.textContent = "off";
        logo.src = "./images/logo2.png";
    } else {
        darkText.textContent = "on";
        wire.style.height = "130px";
        logo.src = "./images/logo3.png";
    }
}

//button portfolio
// const menu = document.querySelector('#toggle');  
// const menuItems = document.querySelector('#overlay');   

// function toggleMenu() {
//     menuItems.classList.toggle('open');
// }
// menu.addEventListener('click', toggleMenu, false);



