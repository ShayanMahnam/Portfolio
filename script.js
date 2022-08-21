var typed = new Typed(".input", {
    strings:['Shayan Mahnam.', 'Full Stack Developer.'],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
});

var chngClr = document.getElementById("chng-clr");
var darkText = document.getElementById("dark-text");
var wire = document.getElementById("wire");
var pic = document.getElementById("pic");
const audio = new Audio();
audio.src = "./sounds/switch.mp3";

chngClr.onclick = function(){
    document.body.classList.toggle("dark-theme");
    audio.currentTime = 0;
    audio.load();
    audio.play();
    wire.style.height = "120px";
    if (document.body.classList.contains("dark-theme")) {
        darkText.textContent = "on";
        
    } else {
        darkText.textContent = "off";
        wire.style.height = "130px";
        
    }
}

const menu = document.querySelector('#toggle');  
const menuItems = document.querySelector('#overlay');  
const menuContainer = document.querySelector('.menu-container');  
const menuIcon = document.querySelector('i');  

function toggleMenu(e) {
    menuItems.classList.toggle('open');
    menuContainer.classList.toggle('full-menu');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.add('fa-times');
    e.preventDefault();
}

menu.addEventListener('click', toggleMenu, false);