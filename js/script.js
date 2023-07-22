// toggle menu
let btn = document.querySelector(".icon");
let links = document.querySelector(".open");



btn.onclick = function (e) {
//stop propagation
e.stopPropagation();
//toggle class "active" on icon
this.classList.toggle("active");
//toggle class "list" on open
links.classList.toggle("list");
}
// click anywhere outside menu
document.addEventListener("click", (e) => {
    //check if menu is open
    if (e.target !== btn && e.target !== links) {
        if (links.classList.contains("list")) {
            //toggle class "active" on icon
            btn.classList.toggle("active");
            //toggle class "list" on open
            links.classList.toggle("list");
        }
    }
});
//stop propagation on menu
links.onclick = function (e) {
    e.stopPropagation();
}

//toggle lan
let arrow = document.querySelector(".arrow");
let lang = document.querySelector(".lang");

arrow.onclick = function (e) {
e.stopPropagation();
//toggle class lan on lang
lang.classList.toggle("lan");
}
// click anywhere outside lang
document.addEventListener("click", (e) => {
    //check if lang is open
    if (e.target !== arrow && e.target !== lang) {
        if (lang.classList.contains("lan")) {
            lang.classList.toggle("lan");
        }
    }
});
//stop propagation on lang
lang.onclick = function (e) {
    e.stopPropagation();
}

//change navbar bg 
function changeBg() {
    var navbar = document.getElementById("navbar");
    var scrollValue = window.scrollY;
    if (scrollValue < 15 ){
        navbar.classList.remove("bgColor");
    }else{
            navbar.classList.add("bgColor");
        }
}
window.addEventListener("scroll", changeBg);

// add class active on every section in big screens 

const li=document.querySelectorAll("nav .mainnav li a");
const sec=document.querySelectorAll("section");

window.addEventListener('scroll', () => {
    let current = '';
    sec.forEach(section => {
        let sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 300){
            current = section.getAttribute('id');
        }
    });
    li.forEach(li => {
        li.classList.remove('active');
        document.querySelector('nav .mainnav li a[href*= '+ current +']').classList.add('active');
    });
    });

// add class active on every section in small screens

    const span=document.querySelectorAll("nav .open li a");
const section=document.querySelectorAll("section");

window.addEventListener('scroll', () => {
    let current = '';
    section.forEach(section => {
        let sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 300){
            current = section.getAttribute('id');
        }
    });
    span.forEach(span => {
        span.classList.remove('active');
        document.querySelector('nav .open li a[href*= '+ current +']').classList.add('active');
    });
});


//save the input text in reload

let t = document.getElementById("name");
let ema = document.getElementById("email");
let lText = document.getElementsByClassName("area");

t.value = localStorage.getItem("text")
ema.value = localStorage.getItem("ema")
lText.value = localStorage.getItem("lText")
let stop
document.forms[0].addEventListener("keyup", Event => {
if (stop) clearTimeout(stop)
stop = setTimeout(()=> {
    localStorage.setItem("text", t.value);
    localStorage.setItem("ema", ema.value);
    localStorage.setItem("massage", lText.value);
}, 500)
})

    //form validation
    let na = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.querySelector("textarea");
    document.forms[0].onsubmit = function (e) {
        let nameValid = false
        let eValid = false
        let messageValid = false

        if ( na.value !== "" && email.value !== "" && message.value !== "" ) {
            nameValid = true
            eValid = true
            messageValid = true
            //delete the input text after sending the email
            localStorage.removeItem("text")
        }
        
        if ( nameValid === false || eValid === false || messageValid === false) {
            e.preventDefault();
        }
    }


// scroll to top button
    let btn2 = document.querySelector(".pop");

    window.onscroll = function () {
        if (window.scrollY >= 200 ) {
            btn2.classList.add("up");
        }else {
            btn2.classList.remove("up");
        }
    };
