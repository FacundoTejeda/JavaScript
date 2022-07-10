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
//         // {apellido: apellido1, cantidad: cantidadFamilia2, precio:cantidadFamilia2 *precioCantidad },
         
//     ]; 
    
    
//     const cantidadTotal = familiaresEgresados.reduce(
//         (acumulador, elemento) => acumulador + elemento.cantidad,
//         0
//     );
    
//     console.log("La cantidad de personas a fotografiar es: "+ cantidadTotal)


 
let formularioAlumnos = document.getElementById("formularioAlumnos")
let inputCurso = document.getElementById("inputCurso")
let inputCantidadAlumnos = document.getElementById("inputCantidadAlumnos")


let productosAlumnos = []

class productosColegio{
    constructor(curso, cantidad, precioPorAlumno ){
    this.curso = this.curso;
    this.cantidad = cantidad;
  }
}

formularioAlumnos.onsubmit = (event) => validarFormularioAlumno(event);

function validarFormularioAlumno(event){
    event.preventDefault();
    let curso = inputCurso.value;
    let cantidad = inputCantidadAlumnos.value;
    const precioPorAlumno = 10000; 
    
    let totalCurso = cantidad * precioPorAlumno

    let productosA = new productosColegio(curso, cantidad, precioPorAlumno)
    productosA.push(productosColegio)

    formularioAlumnos.reset();
    console.log(totalCurso)
}
//     const sesionEgresados = 10000

//     let cantidad = parseInt(prompt("Ingresar cantidad de alumnos que quieren la sesion (Hay descuentos por cantidad): "))
//     function  calculo(cantidad, sesionEgresados){
//        return cantidad * sesionEgresados;
//     }
//    let total = calculo(cantidad, sesionEgresados)
//    alert("El total a abonar es de: $" + total)
  
//   let porcentajeDescuento1 = parseFloat(0.15)
//   let porcentajeDescuento2 = parseFloat(0.05)

//  function precioFinal1(total, porcentajeDescuento1){
//       return(total - (total * porcentajeDescuento1))          
//       }
//       let precioFinal_1 =  precioFinal1(total, porcentajeDescuento1)
     
//       function precioFinal2(total, porcentajeDescuento2){
//           return(total - (total * porcentajeDescuento2)) 
//           }
//       let precioFinal_2 =  precioFinal2(total, porcentajeDescuento2)
 
//       let totalPrecio = document.getElementById("totalPrecio")
//       console.log(totalPrecio.innerHTML)
     
      
//   let formaPago = parseInt(prompt("En que forma van a querer abonar?: \n1. Si abonan en una cuota tienen un (15% de descuento) \n2. Si abonan en 3 cuotas tienen un (5% de descuento) \n3. Si abonan en 6 cuotas no tienen descuento" ))
//   switch(formaPago) {
//       case 1:      
//       let elPrecioFinal  = document.createElement("div")
//       totalPrecio.innerHTML =`
//          <div class="precioFinal">
//             <h2> Pago con el 15% de descuento</h2>
//             <p>$${precioFinal_1}</p>
//          </div>               
//          `
//          totalPrecio.append(elPrecioFinal)
//       break;
//       case 2: 
//          let elPrecioFinal2  = document.createElement("div")
//          totalPrecio.innerHTML =`
//          <div class="precioFinal">
//             <h2> Pago con el 15% de descuento</h2>
//             <p>$${precioFinal2}</p>
//          </div>               
//          `
//          totalPrecio.append(elPrecioFinal2)       
     
//      break;
//       case 3:        
//       let elPrecioFinal3  = document.createElement("div")
//       totalPrecio.innerHTML =`
//          <div class="precioFinal">
//             <h2> Pago con el 15% de descuento</h2>
//             <p>$${total}</p>
//          </div>               
//          `
//          totalPrecio.append(elPrecioFinal3)
//      break;
//       default:
//           alert("Si estas buscando otra financiacion escribinos por privado");
//      break;
//   }



// //Esta funcion es para que los fotografos ingresen sus sesiones hechas
let formularioFotografos = document.getElementById("formularioFotografos")
let inputApellidoFotografo = document.getElementById("inputApellidoFotografo")
let inputCantidad = document.getElementById("inputCantidad")
let inputPrecioGastosFotografo = document.getElementById("inputPrecioGastosFotografo")
let inputPrecioVentaFotografo = document.getElementById("inputPrecioVentaFotografo")

let productosFotografo = []

class Productos{
    constructor(apellido, cantidad, precioGastos, precioVenta ){
    this.apellido = apellido.toUpperCase();
    this.cantidad = cantidad;
    this.precioGastos = precioGastos;
    this.precioVenta = precioVenta;
  }
}
formularioFotografos.onsubmit = (event) => validarFormularioFotografo(event);

function validarFormularioFotografo(event){
    event.preventDefault();
    let apellido = inputApellidoFotografo.value;
    let cantidad = inputCantidad.value;
    let precioGastos = inputPrecioGastosFotografo.value;
    let precioVenta = inputPrecioVentaFotografo.value;

    let producto = new Productos(apellido, cantidad, precioGastos, precioVenta)
    producto.push(Productos)

    formularioFotografos.reset();
 
}

function mostrarSesiones(cantidad){
    for(const cantidad of inputCantidad){
        console.log(cantidad)
        console.log(Productos.apellido)
    }
}

function main(){
    mostrarSesiones(productosFotografo)
}
main()













// const menorPrecio = egresados.filter((familia) => famili.precio < 4000);
// console.log ("Cuales son las familias que pagan menos? "+ menorPrecio)

// const listaFamilias = egresados.map((familia) => familia.apellido);
// console.log(listaFamilias)

// //   

// const numeros = [1,2,3,40,24,33];

// function sumaPorCondicion(array, funcionTest) {
//     let totalSuma = 0

//     for (const elemento of array){
//         if(funcionTest(elemento)){
//             totalSuma += elemento
//         }
//     }
//     return total
// }

// const condicionParaSuma = (numero) => {
//     if(numero > 10){
//         return true
//     }else{
//         return false
//     }
// }
// let totalSumaPorCondicion = sumaPorCondicion(numeros, condicionParaSuma)
// alert("el total es de:" + totalSumaPorCondicion)


// let contenedor = document.getElementById("contenedor-uno")
// let parrafos = document.getElementById("parrafo1")
// console.log(contenedor)
// console.log(contenedor.innerHTML)

// //get element by class/
// let listaContenedores = document.getElementsByClassName("contenedor-dos")

// console.log(listaContenedores)

// for(const elemento of listaContenedores){
//     console.log(elemento.inner)
// }

// //inner text
// let parrafo = document.getElementById("parrafo1")
// console.log(parrafo.innerText)
// parrafo.innerText="Est es la descripcion modificada"
// console.log(parrafo.innerText)



// //
// let inputEmail = document.getElementById("inputEmail")
// let inputContrasenia = document.getElementById("inputContrasenia")

// console.log(inputEmail.value)
// inputEmail.value = "facudotejeda3@gmail.com"
// console.log(inputEmail.value)

// const listaProductos = [
// {
//     id:1,
//     nombre: "Graduacion",
//     precioGastos: "1000",
//     precioSesion: "5000",
// },
// {
//     id:2,
//     nombre: "Fiesta",
//     precioGastos: "900",
//     precioSesion: "6000",
// },
// {
//     id:3,
//     nombre: "Familiar",
//     precioGastos: "400",
//     precioSesion: "2500",
// },
// ];   

// let contenedorProductos = document.getElementById("contenedor-productos")

// for(const producto of listaProductos){
//     let columna = document.createElement("div")
//     columna.className = "col-md-4 mt-3"
//     columna.id = `columna-${producto.id}`
//     columna.innerHTML =`
//         <div class="card">
//             <div class="card-body">
//                 <p class="card-text">Nombre: <b>${producto.nombre}</b></p>           
//                 <p class="card-text">Precio gastos: <b>${producto.precioGastos}</b></p>           
//                 <p class="card-text">Precio Sesion: <b>${producto.precioSesion}</b></p>           
//             </div>    
//         </div>    `
        
// contenedorProductos.append(columna)
// }

// let botonUno = document.getElementById("btnEventoUno")
// let botonDos = document.getElementById("btnEventoDos")

// botonUno.addEventListener("click", () =>{
//     alert("Se oprimio boton uno")
// })

// botonDos.onclick = () =>{
//     alert("Se oprimio el boton dos")
// }

