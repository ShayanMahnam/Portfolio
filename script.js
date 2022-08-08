var typed = new Typed(".input", {
    strings:['Shayan Mahnam.', 'Full Stack Developer.'],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
});

var chngClr = document.getElementById("chng-clr");
var darktext = document.getElementById("dark-text")

chngClr.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        darktext.textContent = "on";
    } else {
        darktext.textContent = "off";
    }
}
