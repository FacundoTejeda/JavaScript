// let formulario = document.getElementById("formulario")
// let nombreFamilia = document.getElementById("inputApellido")
// let cantidad = document.getElementById("number")
// formulario.onsubmit = (event) => validarFormulario(event)

// function validarFormulario(event) {
//     event.preventDefault()
//     console.log(event)
//     console.log("se ejecuto formulario")
// }
// let bienvenidaFamiliares  = document.createElement("div")
//       totalFamilias.innerHTML =`
//          <div class="saludoFamiliares">
//             <h2> Bienvenida Familia!</h2>
//             <p>${nombreFamilia}</p>
//          </div>               
//          `
//          totalFamilias.append(bienvenidaFamiliares)

 
//   let precioCantidad = 3000

//     const familiaresEgresados = [
//         {apellido: inputApellido, cantidad: cantidad, precio:cantidad *precioCantidad },
                
//     ]; 
    
    
//     const cantidadTotal = familiaresEgresados.reduce(
//         (acumulador, elemento) => acumulador + elemento.cantidad,
//         0
//     );
    
//     console.log("La cantidad de personas a fotografiar es: "+ cantidadTotal)


// //Esta funcion es para que los fotografos ingresen sus sesiones hechas
// const restar = (a, b) => a - b;
// const div = (a, b) => a / b;
// const sumar = (a, b) => a + b;
// const multi = (a, b) => a * b;

// const gastosTotales = []

// let formularioFotografos = document.getElementById("formularioFotografos")
// let inputApellidoFotografo = document.getElementById("inputApellidoFotografo")
// let inputCantidad = document.getElementById("inputCantidad")
// let inputPrecioGastosFotografo = document.getElementById("inputPrecioGastosFotografo")
// let inputPrecioVentaFotografo = document.getElementById("inputPrecioVentaFotografo")
// let contenedorPresupuesto = document.getElementById("contenedor-presupuesto")

// let productosFotografo = []

// class Productos{
//     constructor(apellido, cantidad, precioGastos, precioVenta ){
//     this.apellido = apellido.toUpperCase();
//     this.cantidad = cantidad;
//     this.precioGastos = precioGastos;
//     this.precioVenta = precioVenta;
//   }
//   gananciaFotografo = () => ((this.cantidad * this.precioVenta) - this.precioGastos)
// }

// formularioFotografos.onsubmit = (event) => validarFormularioFotografo(event);

// function validarFormularioFotografo(event){
//     event.preventDefault();
//     let apellido = inputApellidoFotografo.value;
//     let cantidad = inputCantidad.value;
//     let precioGastos = inputPrecioGastosFotografo.value;
//     let precioVenta = inputPrecioVentaFotografo.value;

//     let producto = new Productos(apellido, cantidad, precioGastos, precioVenta)
//     productosFotografo.push(producto)

//     formularioFotografos.reset();
//     calcularGastos();
 
// }

// function calcularGastos () {
//     productosFotografo.forEach ((producto) =>{
//         let columna = document.createElement("div")
//         columna.innerHTML =`
//             <div class="card">
//                 <div class="card_body">
//                     <p class="card_text">El total a liquidar es: $${producto.gananciaFotografo()}</p> 
//                 </div>
//             </div>   
//             `
        
//     })
// }
// let calcularGastos = calcularGastos.append (columna)
// // let botonUno = document.getElementById("btnEventoUno")
// // let botonDos = document.getElementById("btnEventoDos")

// // botonUno.addEventListener("click", () =>{
//     alert("Se oprimio boton uno")
// })

// botonDos.onclick = () =>{
//     alert("Se oprimio el boton dos")
// }


class Producto {
    constructor(id, nombre, imagen,precio){
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
    }
}
/* Funciones*/
function renderCard(producto){
    let cardRendered= ` 
    <div class="card m-3" style="width: 18rem;">
       <img src="../coderhouseJavaScript/images/${producto.imagen}" class="card-img-top" alt="...">
       <div class="card-body">
          <h5 class="card-title">${producto.id}.${producto.nombre}</h5>
          <p class="card-text">$${producto.precio}</p>
          <a href="#" class="btn btn-primary botonDeCompra" id="${producto.id}">Agregar al carrito</a>
       </div>
    </div>
    `;
    return cardRendered
}
function limpiarCarrito() {
   let divCarrito = document.querySelector("#carrito");
    divCarrito.innerHTML = "";
}
function actualizarCarrito(carrito){
    let divCarrito = document.querySelector("#carrito");
    carrito.productos.forEach(producto =>{
        divCarrito.innerHTML += renderCard(producto);
    })
    divCarrito.innerHTML +=`<h1> Precio Total: $ ${carrito.calcularTotal()}</h1>`
}
function renovarStorage(){
    localStorage.removeItem("carrito");
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

/*cargar carrito */
window.addEventListener(`DOMContentLoaded`, (e) => {
    let storage = JSON.parse(localStorage.getItem("carrito"));
    let carritoGuardado = new Carrito(storage.id, storage.productos);
    storage.productos.forEach(producto =>{
        carritoGuardado.productos.push(producto);
    })
    limpiarCarrito();
    actualizarCarrito(carritoGuardado);
})

class Carrito{
    constructor(id, ){
        this.id = id;
        this.productos = [];
    }
    calcularTotal(){
        let total = 0;
        for(let i = 0; i < this.productos.length;i++){
            total = total + this.productos[i].precio
        }
        return total;
    }
}

let catalogoFotos = []
let producto1 = new Producto(1,"Sesion Familiar","familias1.jpg",5000);
let producto2 = new Producto(2,"Egresos","egreso.jpeg",5000);
let producto3 = new Producto(3,"Eventos empresariales","empresarial.jpg",6000);
let producto4 = new Producto(4,"Creacion de contenido","creacioncontenido.jpeg",2000);

catalogoFotos.push(producto1);
catalogoFotos.push(producto2);
catalogoFotos.push(producto3);
catalogoFotos.push(producto4);


    let cardsDiv = document.querySelector("#cards")

            catalogoFotos.forEach(producto =>{
             cardsDiv.innerHTML += renderCard(producto);
})




/* manejo de los botones */ 
let carrito1 = new Carrito(1); 
let botones = document.querySelectorAll(".botonDeCompra");
let arrayDeBotones = Array.from(botones);
arrayDeBotones.forEach(boton =>{
    boton.addEventListener("click", (e) => {
    let productoSeleccionado = catalogoFotos.find(producto => producto.id == e.target.id);
        carrito1.productos.push(productoSeleccionado)
        renovarStorage();
    })

})


/* PRUEBA*/

const cards = document.getElementById("cards")
const items = document.getElementById("items")
const footer = document.getElementById("footer")
const templateCard = document.getElementById("template-card").content
const templateFooter = document.getElementById("template-footer").content
const templateCarrito = document.getElementById("template-carrito").content
const fragment = document.createDocumentFragment()
let carrito = {}

document.addEventListener('DOMContentLoaded', () => {
    fetchData()   
})
cards.addEventListener("click", e =>{
    addCarrito(e)
})

const fetchData = async () => {
    try{
        const res = await fetch ("http://jsonTest.json")
        const data = await res.json()  
        // console.log(data)      
        pintarCards(data)
    } catch (error) {
        console.log(error)
    }
}

const pintarCards = data => {
    data.forEach (producto =>{
        templateCard.querySelector('h5').textContent = producto.title
        templateCard.querySelector('p').textContent = producto.precio
        templateCard.querySelector('img').setAtributte("src", producto.thumbnailUrl)
        templateCard.querySelector('.btn-dark').dataset.id = producto.id
     
        
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}

const addCarrito = e => {
    console.log(e.target)
    if (e.target.classList.contains("btn-dark")){
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = objeto => {
    // console.log(objeto)
    const producto = {
        id: objeto.querySelector(".bbtn-dark").dataset.id,
        title: objeto.querySelector("h5").textContent,
        precio: objeto.querySelector("p").textContent,
        cantidad: 1
    }
    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad + 1 
    }
    carrito[producto.id] = {...producto}
    pintarCarrito()
}

const pintarCarrito = () => {
    // console.log(carrito)
    items.innerHTML = ""
    Object.values(carrito).forEach(producto =>{
        templateCarrito.querySelector("th").textContent = producto.id
        templateCarrito.querySelector("td")[0].textContent = producto.title
        templateCarrito.querySelector("td")[1].textContent = producto.cantidad
        templateCarrito.querySelector(".btn-info").dataset.id = producto.id
        templateCarrito.querySelector(".btn-danger").dataset.id = producto.id
        templateCarrito.querySelector("span").textContent = producto.cantidad * producto.precio

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild

    pintarFooter()
}
const pintarFooter = () => {
    footer.innerHTML = ""
    if(Object.keys(carrito).length === 0){
        footer.innerHTML = '<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>'
    }
    const nCantidad = Object.values(carrito).reduce((acc,{cantidad}) => acc + cantidad,0)
    console.log(nCantidad)
}

