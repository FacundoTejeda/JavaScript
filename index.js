// class Producto {
//     constructor(id, nombre, imagen,precio){
//         this.id = id;
//         this.nombre = nombre;
//         this.imagen = imagen;
//         this.precio = precio;
//     }
// }

// class Carrito{
//     constructor(id){
//         this.id = id;
//         this.productos = [];
//     }
//     calcularTotal(){
//         let total = 0;
//         for(let i = 0; i < this.productos.length;i++) {
//             total = total + this.productos[i].precio
//         }
//         return total;
//     }
// }
// // // const desestructurar = (item) => {
// // //     const {id,precio} = item
// // //     console.log(id,precio)
// // // }
// // // desestructurar(Producto)


// /* Funciones*/
// function renderCard(producto){
//     let cardRendered= ` 
//     <div class="card m-3" style="width: 18rem;">
//        <img src="../images/${producto.imagen}" class="card-img-top" alt="...">
//        <div class="card-body">
//           <h5 class="card-title">${producto.id}.${producto.nombre}</h5>
//           <p class="card-text">$${producto.precio}</p>
//           <a href="#" class="btn btn-primary botonDeCompra" id="${producto.id}">Agregar al carrito</a>
//        </div>
//     </div>
//     `;
//     return cardRendered
// }

// function limpiarCarrito() {
//     let divCarrito = document.querySelector("#carrito");
//     divCarrito.innerHTML = "";
// }
// function actualizarCarrito(carrito) {
//     let divCarrito = document.querySelector("#carrito");
//     carrito.productos.forEach(producto => {
//         divCarrito.innerHTML += renderCard(producto);
//     })
//     divCarrito.innerHTML += `<h1>Precio Total: $ ${carrito.calcularTotal()}</h1>`
// }

// function renovarStorage() {
//     localStorage.removeItem("carrito"); 
//     localStorage.setItem("carrito", JSON.stringify(carrito));
// }

// /*cargar carrito */
// window.addEventListener('DOMContentLoaded', (e) => {
//     let storage = JSON.parse(localStorage.getItem("carrito"));
//     if(storage) {
//     let carritoGuardado = new Carrito(storage.id, storage.productos);
//     storage.productos.forEach(producto => {
//         carritoGuardado.productos.push(producto);
//     })
//     limpiarCarrito();
//     actualizarCarrito(carritoGuardado);
// }
// });

// let catalogoFotos = []
// let producto1 = new Producto(1,"Sesion Familiar","familias1.jpg",5000);
// let producto2 = new Producto(2,"Egresos","egreso.jpeg",5000);
// let producto3 = new Producto(3,"Eventos empresariales","empresarial.jpg",6000);
// let producto4 = new Producto(4,"Creacion de contenido","creacioncontenido.jpeg",4000);
// catalogoFotos.push(producto1);
// catalogoFotos.push(producto2);
// catalogoFotos.push(producto3);
// catalogoFotos.push(producto4);


//     let cardsDiv = document.querySelector("#cards")
//             catalogoFotos.forEach(producto => {
//             cardsDiv.innerHTML += renderCard(producto);
// })


// /* manejo de los botones */ 
// let carrito = new Carrito(1);
// let botones = document.querySelectorAll(".botonDeCompra");
// let arrayDeBotones = Array.from(botones);
// arrayDeBotones.forEach(boton => {
//     boton.addEventListener("click", (e) => {
//         let productoSeleccionado = catalogoFotos.find(producto => producto.id == e.target.id);
//         carrito.productos.push(productoSeleccionado);
//         limpiarCarrito();
//         actualizarCarrito(carrito);
//         renovarStorage();
//     })
// });

// const btnMostrarAlert = document.getElementById("btn-mostrar-alert");
// btnMostrarAlert.onclick = mostrarAlert;

// function mostrarAlert() {    
//     swal.fire({
//         title: '<strong> Queres comunicarte con nosotros?</strong>',
//         icon: 'info',
//         html:
//           'Mandanos un <b>Whatsapp</b>, ' +
//           '<a href="https://wa.me/5493816249426">links</a> ',
          
//         showCloseButton: true,
//         showCancelButton: true,
//         focusConfirm: false,
//         confirmButtonText:
//           '<i class="fa fa-thumbs-up"></i> Necesitaba!',
//         confirmButtonAriaLabel: 'No, gracias!',
//         cancelButtonText:
//           '<i class="fa fa-thumbs-down"></i>',
//         cancelButtonAriaLabel: 'Thumbs down'
//       });
// }
/** PRUEBA */
const cards = document.getElementById("cards")
const items = document.getElementById("items")
const footer = document.getElementById("footer")
const templateCard = document.getElementById("template-card")
const templateFooter = document.getElementById("template-footer")
const templateCarrito = document.getElementById("template-carrito")
const fragment = document.createDocumentFragment()

class Producto {
    constructor(id, nombre, imagen,precio){
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
    }
}
 let carrito = [];

document.addEventListener('DOMContentLoaded', () => {  
    console.log('Carro 1', carrito);  
    if(localStorage.getItem("carrito")) {
        carga = JSON.parse(localStorage.getItem("carrito"));

        //if(carga !== null){
            carrito = carga;
        //}
        console.log('Carro 2', carrito);
        pintarCarrito()
    }
})
cards.addEventListener("click", e =>{
    addCarrito(e)
})

items.addEventListener("click", e =>{
    btnAumentar
})
//FETCH DE MIS PRODUCTOS //
const fetchData = async () => {
    try{
        const res = await fetch ("jsonTest.json")
        const data = await res.json()  
        //  console.log(data)      
        pintarCards(data)
    } catch (error) {
        console.log(error)
    }
}
fetchData()

// let catalogoFotos = []
const pintarCards = catalogoFotos => {
    const fragment = document.createDocumentFragment()
    catalogoFotos.forEach (producto =>{
           templateCard.content.querySelector('h5').textContent = producto.title
           templateCard.content.querySelector('p').textContent = producto.precio
           templateCard.content.querySelector('img').src = `/images/${producto.imagen}`
           templateCard.content.querySelector('.btn-dark').id = producto.id             
           const clone = document.importNode(templateCard.content,true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)

    let btnAddToCart = document.querySelector(".card .btn")
        btnAddToCart.addEventListener("click", (e) => addCarrito(e))
}

const addCarrito = e => {
    
    if (e.target.classList.contains("btn-dark")){
       
         setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = objeto => {
    // console.log(objeto)
    const producto = {
        id: objeto.querySelector(".btn-dark").getAttribute("id"),
        nombre: objeto.querySelector("h5").textContent,
        precio: objeto.querySelector("p").textContent,
        cantidad: 1
    }
    console.log(producto)
    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad + 1 
    }
    //carrito[producto.id] = {...producto}
    carrito[producto.id] = producto;
    localStorage.setItem("carrito", JSON.stringify(carrito))
    console.log(carrito)
    pintarCarrito()
}

const pintarCarrito = () => {
    const fragment = document.createDocumentFragment()
    items.innerHTML = ""
    console.log('pintarCarrito', carrito);
    carrito.forEach(producto =>{
        console.log('pintarCarrito', producto);
        if(producto !== null){
        templateCarrito.content.querySelector("th").textContent = producto.id
        templateCarrito.content.querySelector("td").textContent = producto.nombre
        templateCarrito.content.querySelector("td").textContent = producto.cantidad
        templateCarrito.content.querySelector(".btn-info").dataset.id = producto.id
        templateCarrito.content.querySelector(".btn-danger").dataset.id = producto.id
        templateCarrito.content.querySelector("span").textContent = producto.cantidad * producto.precio
        
        const clone = document.importNode(templateCarrito.content,true)
        fragment.appendChild(clone)
        }
    })
    items.appendChild

    pintarFooter()
}
const pintarFooter = () => {
    const fragment = document.createDocumentFragment()
    footer.innerHTML = ""
    if(Object.keys(carrito).length === 0){
        footer.innerHTML = '<th scope="row" colspan="5">Carrito vacío </th>'
        return
    }

    const nCantidad = Object.values(carrito) .reduce((acc,{cantidad}) => acc + cantidad,0)
    const nPrecio = Object.values(carrito).reduce((acc,{cantidad, precio}) => acc + cantidad * precio, 0)

    templateFooter.content.querySelectorAll("td")[0].textContent = nCantidad
    templateFooter.content.querySelector("span").textContent = nPrecio

   const clone = templateFooter.cloneNode(true)
   fragment.appendChild(clone)  
   footer.appendChild(fragment)

   const vaciarCarrito = document.getElementById("vaciarCarrito")
   
    vaciarCarrito.addEventListener("click", () => {
    carrito = []
    pintarCarrito()
   })

}

const btnAumentar = e => {
    console.log(e.target)
    if(e.target.classList.contains("btn-info")){
    //    console.log(carrito[e.target.dataset.id])        
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = {...producto}
        pintarCarrito()
    }
    if(e.target.classList.contains("btn-danger")){
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if(producto.cantidad === 0){
            delete carrito[e.target.dataset.id]
        }
        pintarCarrito()
}
e.stopPropagation()
}