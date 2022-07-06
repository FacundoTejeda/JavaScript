
let ingreso = prompt("Estas buscando cobertura para: \n1.Familias  \n2.Colegio")
        switch (ingreso) {
          case "1":  
                let lastName1 = prompt("Ingresá el apellido de tu familia")
                cantidadFamilia1 = parseInt(prompt("Cuantos integrantes van a asistir?"))
                alert("Bienvenida familia "+lastName1)

                let lastName2 = prompt("Ingresá el apellido de tu familia")
                cantidadFamilia2 = parseInt(prompt("Cuantos integrantes van a asistir?"))
                alert("Bienvenida familia "+lastName2)
          break;      
           case "2":
                let nombres = prompt("Ingresa el nombre de tu colegio: \n1.Instituto Adventista Cordoba,  \n2.Instituto Adventista Balcarce,  \n3.Instituto Adventista Santa Fe")
          
         switch (nombres) {
            case "1":
                alert ("Hola chicos de Cordoba");
          break;
            case "2":
                alert ("Hola chicos de Balcarce");
           break;
            case "3":
                alert ("Hola chicos de Santa Fe");
            break;
            default:
                alert ("De que cole sos?");
            break;       
       }
        nombres = prompt ("Ingresa tu colegio");
        break;        
    }
    

    const sesionEgresados = 10000

    let cantidad = parseInt(prompt("Ingresar cantidad de alumnos que quieren la sesion (Hay descuentos por cantidad): "))
    function  calculo(cantidad, sesionEgresados){
       return cantidad * sesionEgresados;
    }
   let total = calculo(cantidad, sesionEgresados)
   alert("El total a abonar es de: $" + total)
  
  let porcentajeDescuento1 = parseFloat(0.15)
  let porcentajeDescuento2 = parseFloat(0.05)

 function precioFinal1(total, porcentajeDescuento1){
      return(total - (total * porcentajeDescuento1))          
      }
      let precioFinal_1 =  precioFinal1(total, porcentajeDescuento1)
     
      function precioFinal2(total, porcentajeDescuento2){
          return(total - (total * porcentajeDescuento2)) 
          }
      let precioFinal_2 =  precioFinal2(total, porcentajeDescuento2)
 
      let totalPrecio = document.getElementById("totalPrecio")
      console.log(totalPrecio.innerHTML)
     
      
  let formaPago = parseInt(prompt("En que forma van a querer abonar?: \n1. Si abonan en una cuota tienen un (15% de descuento) \n2. Si abonan en 3 cuotas tienen un (5% de descuento) \n3. Si abonan en 6 cuotas no tienen descuento" ))
  switch(formaPago) {
      case 1:      
      let elPrecioFinal  = document.createElement("div")
      totalPrecio.innerHTML =`
         <div class="precioFinal">
            <h2> Pago con el 15% de descuento</h2>
            <p>$${precioFinal1.precioFinal_1}</p>
         </div>               
         `
         totalPrecio.append(elPrecioFinal)
      break;
      case 2: 
         let elPrecioFinal2  = document.createElement("div")
         totalPrecio.innerHTML =`
         <div class="precioFinal">
            <h2> Pago con el 15% de descuento</h2>
            <p>$${precioFinal2.precioFinal_2}</p>
         </div>               
         `
         totalPrecio.append(elPrecioFinal2)       
     
     break;
      case 3:        
      let elPrecioFinal3  = document.createElement("div")
      totalPrecio.innerHTML =`
         <div class="precioFinal">
            <h2> Pago con el 15% de descuento</h2>
            <p>$${total}</p>
         </div>               
         `
         totalPrecio.append(elPrecioFinal3)
     break;
      default:
          alert("Si estas buscando otra financiacion escribinos por privado");
     break;
  }


  let precioCantidad = 2500

    const familiaresEgresados = [
        {apellido: lastName1, cantidad: cantidadFamilia1, precio:cantidadFamilia1 *precioCantidad },
        {apellido: lastName2, cantidad: cantidadFamilia2, precio:cantidadFamilia2 *precioCantidad },
         
    ]; 
    
    
    const cantidadTotal = familiaresEgresados.reduce(
        (acumulador, elemento) => acumulador + elemento.cantidad,
        0
    );

    
    alert("La cantidad de personas a fotografiar es: "+ cantidadTotal)





class Producto{
    constructor(nombre, precioCompra, precioVenta, cantidad){
        this.nombre = nombre.toUpperCase()
        this.precioCompra = precioCompra
        this.precioVenta = precioVenta
        this.cantidad = cantidad
    }
}
//Esta funcion es para que los fotografos ingresen sus sesiones hechas

function agregarProductos(){
    let numeroSesiones = parseInt(prompt("Cuantas sesiones necesita ingresar"))
    let sesiones = []

    for(let index = 0; index < numeroSesiones; index++){
        let nombre = prompt ("Ingrese su nombre")
        let precioCompra0 = parseFloat(prompt("Ingrese el precio de compra de los materiales"))
        let precioVenta0 = parseFloat(prompt("Ingrese el precio venta final"))
        let cantidad0 = parseInt(prompt("Ingrese la cantidad de egresados"))

        let sesionARegistrar = new Producto(nombre, precioCompra0, precioVenta0, cantidad0)
        sesiones.push(sesionARegistrar)
    }

    let productoNuevo = new Producto ("Producto 2", 100, 2000, 22)
    
     sesiones.unshift(productoNuevo)

return sesiones
}

function mostrarSesiones(sesiones){
    for(const sesion of sesiones){
        console.log(sesiones)
        console.log(sesiones.nombre)
    }
}

function main(){
    let sesionesRegistradas = agregarProductos()
    mostrarSesiones(sesionesRegistradas)
}
main()





 let familiasInscriptas = egresados.some ((familia) => familia.egresados === "Azaña");
 familiasInscriptas = egresados.some ((familia) => familia.egresados === "Rotela");
//console.log (familiasInscriptas)


const nombreFamilia = prompt("Ingrese el apellido de su familia")
const familiaConfirmada = egresados.find((familia) => familia.apellido.toLowerCase() === nombreFamilia.toLowerCase())
console.log(familiaConfirmada)



 const precios = egresados.map((familia) => familia.cantidad)
 console.log(precios)



const menorPrecio = egresados.filter((familia) => famili.precio < 4000);
console.log ("Cuales son las familias que pagan menos? "+ menorPrecio)

const listaFamilias = egresados.map((familia) => familia.apellido);
console.log(listaFamilias)

//   

const numeros = [1,2,3,40,24,33];

function sumaPorCondicion(array, funcionTest) {
    let totalSuma = 0

    for (const elemento of array){
        if(funcionTest(elemento)){
            totalSuma += elemento
        }
    }
    return total
}

const condicionParaSuma = (numero) => {
    if(numero > 10){
        return true
    }else{
        return false
    }
}
let totalSumaPorCondicion = sumaPorCondicion(numeros, condicionParaSuma)
alert("el total es de:" + totalSumaPorCondicion)


let contenedor = document.getElementById("contenedor-uno")
let parrafos = document.getElementById("parrafo1")
console.log(contenedor)
console.log(contenedor.innerHTML)

//get element by class/
let listaContenedores = document.getElementsByClassName("contenedor-dos")

console.log(listaContenedores)

for(const elemento of listaContenedores){
    console.log(elemento.inner)
}

//inner text
let parrafo = document.getElementById("parrafo1")
console.log(parrafo.innerText)
parrafo.innerText="Est es la descripcion modificada"
console.log(parrafo.innerText)



//
let inputEmail = document.getElementById("inputEmail")
let inputContrasenia = document.getElementById("inputContrasenia")

console.log(inputEmail.value)
inputEmail.value = "facudotejeda3@gmail.com"
console.log(inputEmail.value)

const listaProductos = [
{
    id:1,
    nombre: "Graduacion",
    precioGastos: "1000",
    precioSesion: "5000",
},
{
    id:2,
    nombre: "Fiesta",
    precioGastos: "900",
    precioSesion: "6000",
},
{
    id:3,
    nombre: "Familiar",
    precioGastos: "400",
    precioSesion: "2500",
},
];   

let contenedorProductos = document.getElementById("contenedor-productos")

for(const producto of listaProductos){
    let columna = document.createElement("div")
    columna.className = "col-md-4 mt-3"
    columna.id = `columna-${producto.id}`
    columna.innerHTML =`
        <div class="card">
            <div class="card-body">
                <p class="card-text">Nombre: <b>${producto.nombre}</b></p>           
                <p class="card-text">Precio gastos: <b>${producto.precioGastos}</b></p>           
                <p class="card-text">Precio Sesion: <b>${producto.precioSesion}</b></p>           
            </div>    
        </div>    `
        
contenedorProductos.append(columna)
}