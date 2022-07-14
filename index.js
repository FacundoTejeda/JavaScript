let formulario = document.getElementById("formulario")
let nombreFamilia = document.getElementById("inputApellido")
let cantidad = document.getElementById("number")
formulario.onsubmit = (event) => validarFormulario(event)

function validarFormulario(event) {
    event.preventDefault()
    console.log(event)
    console.log("se ejecuto formulario")
}
let bienvenidaFamiliares  = document.createElement("div")
      totalFamilias.innerHTML =`
         <div class="saludoFamiliares">
            <h2> Bienvenida Familia!</h2>
            <p>${nombreFamilia}</p>
         </div>               
         `
         totalFamilias.append(bienvenidaFamiliares)

 
  let precioCantidad = 3000

    const familiaresEgresados = [
        {apellido: inputApellido, cantidad: cantidad, precio:cantidad *precioCantidad },
                
    ]; 
    
    
    const cantidadTotal = familiaresEgresados.reduce(
        (acumulador, elemento) => acumulador + elemento.cantidad,
        0
    );
    
    console.log("La cantidad de personas a fotografiar es: "+ cantidadTotal)


// //Esta funcion es para que los fotografos ingresen sus sesiones hechas
const restar = (a, b) => a - b;
const div = (a, b) => a / b;
const sumar = (a, b) => a + b;
const multi = (a, b) => a * b;

const gastosTotales = []

let formularioFotografos = document.getElementById("formularioFotografos")
let inputApellidoFotografo = document.getElementById("inputApellidoFotografo")
let inputCantidad = document.getElementById("inputCantidad")
let inputPrecioGastosFotografo = document.getElementById("inputPrecioGastosFotografo")
let inputPrecioVentaFotografo = document.getElementById("inputPrecioVentaFotografo")
let contenedorPresupuesto = document.getElementById("contenedor-presupuesto")

let productosFotografo = []

class Productos{
    constructor(apellido, cantidad, precioGastos, precioVenta ){
    this.apellido = apellido.toUpperCase();
    this.cantidad = cantidad;
    this.precioGastos = precioGastos;
    this.precioVenta = precioVenta;
  }
  gananciaFotografo = () => ((this.cantidad * this.precioVenta) - this.precioGastos)
}

formularioFotografos.onsubmit = (event) => validarFormularioFotografo(event);

function validarFormularioFotografo(event){
    event.preventDefault();
    let apellido = inputApellidoFotografo.value;
    let cantidad = inputCantidad.value;
    let precioGastos = inputPrecioGastosFotografo.value;
    let precioVenta = inputPrecioVentaFotografo.value;

    let producto = new Productos(apellido, cantidad, precioGastos, precioVenta)
    productosFotografo.push(producto)

    formularioFotografos.reset();
    calcularGastos();
 
}

function calcularGastos () {
    productosFotografo.forEach ((producto) =>{
        let columna = document.createElement("div")
        columna.innerHTML =`
            <div class="card">
                <div class="card_body">
                    <p class="card_text">El total a liquidar es: $${Productos.gananciaFotografo}</p> 
                </div>
            </div>
            `
        calcularGastos.append (columna)
    })
}
let botonUno = document.getElementById("btnEventoUno")
let botonDos = document.getElementById("btnEventoDos")

botonUno.addEventListener("click", () =>{
    alert("Se oprimio boton uno")
})

botonDos.onclick = () =>{
    alert("Se oprimio el boton dos")
}


class Producto {
    constructor(id, nombre, imagen,precio){
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
    }
}

class Carrito{
    constructor(id, ){
        this.id = id;
        this.productos ;
    }
}

let catalogoFotos = []
let producto1 = new Producto(1,"Facundo","familias1.jpg",100);
let producto2 = new Producto(2,"ivon","familias2.jpg",150);

catalogoFotos.push(producto1);
catalogoFotos.push(producto2);


    let cardsDiv = document.querySelector("#cards")

            catalogoFotos.forEach(producto =>{
             cardsDiv.innerHTML += renderCard(producto);
})

function renderCard(producto){
    let cardRendered= ` 
    <div class="card m-3" style="width: 18rem;">
       <img src="./images${producto.imagen}" class="card-img-top" alt="...">
       <div class="card-body">
          <h5 class="card-title">${producto.id}.${producto.nombre}</h5>
          <p class="card-text">$${producto.precio}</p>
          <a href="#" class="btn btn-primary botonDeCompra" id="${producto.id}>Agregar al carrito</a>
       </div>
    </div>
    `;
    return cardRendered
}



let carrito1 = new Carrito(1)
 

let botones = document.querySelectorAll(".botonDeCompra");
let arrayDeBotones = Array.from(botones);
arrayDeBotones.forEach(boton =>{
    boton.addEventListener("click", (e) => {
    let productoSeleccionado = catalogoFotos.find(producto => producto.id == e.target.id);

    })

})
