// NAVBAR
const nav=document.querySelector(".navegation");
let lastScrollY=window.scrollY;


window.addEventListener("scroll", ()=> {
  if (lastScrollY<window.scrollY){
    nav.classList.add("nav-hiden")
  } else
  {
    nav.classList.remove("nav-hiden")
  }

  lastScrollY=window.scrollY;
})


function realizarDesplazamiento() {
  var divLeft = document.getElementById('div-left');
  var divRight = document.getElementById('div-right');

  // Aplicar el desplazamiento a ambos divs
  divLeft.style.opacity = '1';
  divLeft.style.transform = 'translateX(0)';

  divRight.style.opacity = '1';
  divRight.style.transform = 'translateX(0)';
}

// Ejecutar la función automáticamente al cargar la página
window.addEventListener('load', function() {
  realizarDesplazamiento();
});


//Scroll Animation
function fadeInElement(element) {
  var elementPosition = element.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (elementPosition - windowHeight + 50 < 0) {
    element.classList.add('fade-in');
  }
}

var animatedElement = document.querySelector('.scroll-animation');
window.addEventListener('scroll', function() {
  fadeInElement(animatedElement);
});


