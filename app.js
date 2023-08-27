const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slidesContainer = document.querySelector('.slides-container');
const slides = Array.from(document.getElementsByClassName('slide'));

const slideWidth = slides[0].clientWidth;
let contador = 0;

function plusEslide(index){
  mostrarEslide(contador += index)
}

function eslideActual(index){
  mostrarEslide(contador = index)

}

function mostrarEslide(index){
  let i;
  if (index > slides.length) {slideIndex = 1}
  if (index < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";


}

// Función para mostrar el slide actual
function primerImagen(index) {
  slidesContainer.style.transform = `translateX(-${slideWidth * index}%)`;
}

// Función para ir al slide anterior
function prevSlide() {
  if (contador  === 0) {
    contador  = slides.length - 1;
  } else {
    contador --;
  }
  primerImagen(contador );
}

// Función para ir al siguiente slide
function nextSlide() {
  if (contador === slides.length - 1) {
    contador = 0;
  } else {
    contador ++;
  }
  primerImagen(contador );
}

// Agrega los event listeners a los botones de navegación
prevBtn.addEventListener('click', plusEslide);
nextBtn.addEventListener('click', eslideActual);
primerImagen(contador );



// cambiar el color de la paguina
let inactivaToggle = document.querySelector("i.bi.bi-toggle-off");
let activaToggle = document.querySelector("i.bi.bi-toggle-on");
let colorDocument = document.querySelector("link#colorDocumento");
let hojaEstilo =colorDocument.getAttribute("href");

function color (){
  let hojaEstilo =colorDocument.getAttribute("href");
  switch (hojaEstilo){
    case "estilos.css":
    inactivaToggle.style.display = "none";
    activaToggle.style.display = "block";
    colorDocument.setAttribute("href", "estilos2.css")
    break;
    default:
      inactivaToggle.style.display = "block";
      activaToggle.style.display = "none";
      colorDocument.setAttribute("href","estilos.css")
      break;
  }
}