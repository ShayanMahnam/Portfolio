var typed = new Typed(".input", {
    strings:['Shayan Mahnam.', 'Full Stack Developer.'],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
});

var chngClr = document.getElementById("chng-clr");
var darkText = document.getElementById("dark-text")
const audio = new Audio();
audio.src = "./sounds/switch.mp3";

chngClr.onclick = function(){
    document.body.classList.toggle("dark-theme");
    audio.play();
    if (document.body.classList.contains("dark-theme")) {
        darkText.textContent = "on";
    } else {
        darkText.textContent = "off";
    }
}
