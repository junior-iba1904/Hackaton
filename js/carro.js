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
    
var cantidadInputs = document.getElementsByClassName("cantidad-producto")
for(var i = 0 ; i < cantidadInputs.length; i++){
    var input = cantidadInputs[i];
    input.addEventListener("change", cantidadAgregar);
}
agregarTotal();
}

function quitarCardProducto(event){
    var clickBoton = event.target
    clickBoton.parentElement.remove();
    agregarTotal();
}

function cantidadAgregar(event){
    var input = event.target
    if(isNaN(input.value) || input.value <= 0 ){
        input.value = 1;
    }
    agregarTotal();
}

//Precios
function agregarTotal(){
    var cartContent = document.getElementsByClassName("content-card")[0];
    var cartBoxes = cartContent.getElementsByClassName("box-card");
    var total = 0;
    for (var i = 0 ; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var precioElemento = cartBox.getElementsByClassName("precio-producto")[0];
        var cantidadElemento = cartBox.getElementsByClassName("cantidad-producto")[0];
        var prec = parseFloat(precioElemento.innerText.replace("$",""));
        var cantidad = cantidadElemento.value;
        total = total + (prec * cantidad);
    }
        //Control de decimal
        total = Math.round(total * 100)/ 100;

        document.getElementsByClassName("precio-total")[0].innerText = '$' + total;
        
    
}
