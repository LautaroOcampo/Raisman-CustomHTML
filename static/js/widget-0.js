
const componentWrapper = document.querySelectorAll(".component-wrapper");
const marcas = document.querySelector(".categorias-container");
const videos = document.getElementsByClassName('banner-videos-container')
const arrepentimiento = document.getElementsByClassName('buyer-info')
const pagos = document.getElementsByClassName('pagos-section')[0]


setTimeout(function() {
  componentWrapper[0].parentNode.insertBefore(marcas, componentWrapper[0].nextSibling);

  videos[0].parentNode.insertBefore(arrepentimiento[0], videos[0].nextSibling)
}, 500);

setTimeout(() => {

const titulo = document.getElementsByClassName('section-category__title')[0];
const titulo2 = document.getElementsByClassName('section-header__original')[0];

let divNuevo = document.createElement('div');
divNuevo.classList.add('div-titulo');

let divNuevo2 = document.createElement('div');
divNuevo2.classList.add('div-titulo');


titulo.appendChild(divNuevo);
titulo2.appendChild(divNuevo2);

}, 500)

const arrow = document.getElementsByClassName('arrow-menu')
const subcategorias = document.getElementsByClassName('subcategorias')
let rotated1
let rotated2

arrow[0].addEventListener('click', (e) => {
  if(!rotated1){
    rotated1 = true
    e.target.style.transform = 'rotate(90deg)'
  }else{
    rotated1 = false
    e.target.style.transform = 'rotate(0deg)'
  }
  subcategorias[0].classList.toggle('invisible')
  subcategorias[1].classList.toggle('invisible')
  subcategorias[2].classList.toggle('invisible')
  subcategorias[3].classList.toggle('invisible')
  subcategorias[4].classList.toggle('invisible')
  subcategorias[5].classList.toggle('invisible')
  subcategorias[6].classList.toggle('invisible')
  subcategorias[7].classList.toggle('invisible')
  subcategorias[8].classList.toggle('invisible')
})
arrow[1].addEventListener('click', (e) => {
  if(!rotated2){
    rotated2 = true
    e.target.style.transform = 'rotate(90deg)'
  }else{
    rotated2 = false
    e.target.style.transform = 'rotate(0deg)'
  }
  subcategorias[9].classList.toggle('invisible')
  subcategorias[10].classList.toggle('invisible')
  subcategorias[11].classList.toggle('invisible')
  subcategorias[12].classList.toggle('invisible')
  subcategorias[13].classList.toggle('invisible')
  subcategorias[14].classList.toggle('invisible')
  subcategorias[15].classList.toggle('invisible')
  subcategorias[16].classList.toggle('invisible')
})

const URLActual = window.location.pathname

if(URLActual !== '/'){
  marcas.classList.add('invisible')
  videos[0].classList.add('invisible')
  pagos.classList.add('invisible')

  document.getElementsByClassName('ui-search shops__ui-main')[0].style.marginTop = '50px'

}

console.log(1)