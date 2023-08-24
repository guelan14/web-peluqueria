//  Ocultar NAVBAR
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
});

//Desplazamiento de entrada

function realizarDesplazamiento() {
  var divLeft = document.getElementById('div-left');
  var divRight = document.getElementById('div-right');

  //Aplicar el desplazamiento a ambos divs
  divLeft.style.opacity = '1';
    divLeft.style.transform = 'translateX(0)';

  divRight.style.opacity = '1';
  divRight.style.transform = 'translateX(0)';
};

// Ejecutar la función automáticamente al cargar la página
window.addEventListener('load', function() {
  realizarDesplazamiento();
});




