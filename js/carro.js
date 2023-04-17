//Carrito

let abrirCarrito = document.querySelector('#carrito')
let Carrito = document.querySelector('.card-carro')
let cerrarCarrito = document.querySelector('.quitar-card')

abrirCarrito.onclick = () => {
    Carrito.classList.add("active");

};

cerrarCarrito.onclick = () => {
    Carrito.classList.remove("active");

};
