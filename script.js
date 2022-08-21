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
        darkText.textContent = "on";
        
    } else {
        darkText.textContent = "off";
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



//advert slide
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}