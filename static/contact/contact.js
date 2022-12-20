const nav = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY >= 50 && window.scrollY < 700) {
    nav.classList.add('opacity');
  } else {
    nav.classList.remove('opacity');
  }

})

window.addEventListener('scroll', () => {
  if (window.scrollY >= 700) {
    nav.classList.add('background');
  } else {
    nav.classList.remove('background');
  }
})
// console.log(window.scrollY);

// ********//

mybutton = document.getElementById("myBtn");

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