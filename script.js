let navbar = document.querySelector(".navbar");
let mainscroll = window.pageYOffset;

window.onscroll = function() {

    let endscroll = window.pageYOffset;
    
    if(mainscroll>endscroll) {
        navbar.style.top = "0"
        navbar.style.opacity = "1"
        navbar.style.transition = ".5s"
    }
    else {
        navbar.style.top = "-150px"
        navbar.style.opacity = "0"
        navbar.style.transition = ".5s"
    }
    mainscroll=endscroll
}