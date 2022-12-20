const nav = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 50 && window.scrollY <700) {
        nav.classList.add('opacity');
    } else {
        nav.classList.remove('opacity');
    }

})

window.addEventListener('scroll', () => {
    if (window.scrollY >=700) {
        nav.classList.add('background');
    }
    else {
        nav.classList.remove('background');
    }
})
console.log(window.scrollY);

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ( document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
