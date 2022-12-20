const nav = document.querySelector('.navbar');
const card = document.querySelector('.card');

window.addEventListener('scroll', () => {
    if (window.scrollY > 247.19998168945312 && window.scrollY < 900) {
        nav.classList.add('opacity');
    } else {
        nav.classList.remove('opacity');
    }
})

window.addEventListener('scroll', () => {
    if (window.scrollY >= 900) {
        nav.classList.add('background');
    } else {
        nav.classList.remove('background');
    }
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 574.4000244140625) {
        card.classList.add('opacitycard')
    }else {
        card.classList.remove('opacitycard')
    }
})
console.log(scrollY);

// **********//

mybutton = document.getElementById("myBtn");
window.onscroll = function () {
    scrollFunction()
};

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {

        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
})

function topFunction() {
    document.documentElement.scrollTop = 0;
}