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
const audio = new Audio();
audio.src = "./sounds/switch.mp3";

chngClr.onclick = function(){
    document.body.classList.toggle("dark-theme");
    audio.currentTime = 0;
    audio.load();
    audio.play();
    wire.style.height = "120px";
    if (document.body.classList.contains("dark-theme")) {
        darkText.textContent = "off";
        
    } else {
        darkText.textContent = "on";
        wire.style.height = "130px";
        
    }
}

//button portfolio
const menu = document.querySelector('#toggle');  
const menuItems = document.querySelector('#overlay');   

function toggleMenu() {
    menuItems.classList.toggle('open');
}
menu.addEventListener('click', toggleMenu, false);



