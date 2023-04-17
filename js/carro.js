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


// Carrito Funcion

if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);

} else {
    ready();
}

//Funciones quitar producto
function ready(){
    var quitarCardButon = document.getElementsByClassName('quitar-producto')
    console.log(quitarCardButon)
    for (var i = 0; i< quitarCardButon.length; i++){
        var boton = quitarCardButon[i]
        boton.addEventListener('click', quitarCardProducto)
    }
}

function quitarCardProducto(event){
    var clickBoton = event.target
    clickBoton.parentElement.remove();
}
