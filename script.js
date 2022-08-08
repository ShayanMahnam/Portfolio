var typed = new Typed(".input", {
    strings:['Shayan Mahnam.', 'Full Stack Developer.'],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
});

var chngClr = document.getElementById("chng-clr");

chngClr.onclick = function(){
    document.body.classList.toggle("dark-theme");
}
