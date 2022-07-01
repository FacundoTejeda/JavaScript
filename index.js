//    for (let i = 1; i<=5; i++){
//    let ingresarNombre = prompt("Ingrese su nombre")
//     alert("Turno de fotos N°: "+i+" Nombre: "+ ingresarNombre)
//      break
//     }

 
//   let numero = parseInt (prompt("Que tabla queres saber?"))
//    let i= 1
//    do{
//        let resultado = numero*i
//        console.log(i+" X "+numero+ " = "+resultado)
//        i++
//    }
//    while(i<=10)
 

//    let nombres = prompt("Ingresa el nombre de tu colegio: \n1.Instituto Adventista Cordoba,  \n2.Instituto Adventista Balcarce,  \n3.Instituto Adventista Santa Fe")
//   while(nombres !="" ){
//        switch (nombres) {
//            case "1":
//                alert ("Hola chicos de Cordoba");
//                break;
//            case "2":
//                alert ("Hola chicos de Balcarce");
//                break;
//            case "3":
//                alert ("Hola chicos de Santa Fe");
//                break;
//            default:
//                alert ("De que cole sos?");
//                break;
//        }
//        nombres = prompt ("Ingresa tu colegio");
//    }
//   const sesionEgresados = 10000
//   let cantidad = parseInt(prompt("Ingresar cantidad de alumnos que quieren la sesion (Hay descuentos por cantidad): "))
//   function  calculo(cantidad, sesionEgresados){
//      return cantidad * sesionEgresados;
//   }
//  let  total = calculo(cantidad, sesionEgresados)
//  alert("El total a abonar es de: $" + total)
 
//  let porcentajeDescuento1 = parseFloat(0.15)
//  let porcentajeDescuento2 = parseFloat(0.05)
// function precioFinal1(total, porcentajeDescuento1){
//      return(total - (total * porcentajeDescuento1))          
//      }
//      let precioFinal_1 =  precioFinal1(total, porcentajeDescuento1)
    
//      function precioFinal2(total, porcentajeDescuento2){
//          return(total - (total * porcentajeDescuento2)) 
//          }
//      let precioFinal_2 =  precioFinal2(total, porcentajeDescuento2)

//  let formaPago = parseInt(prompt("En que forma van a querer abonar?: \n1. Si abonan en una cuota tienen un (15% de descuento) \n2. Si abonan en 3 cuotas tienen un (5% de descuento) \n3. Si abonan en 6 cuotas no tienen descuento" ))
//  switch(formaPago) {
//      case 1:      
//          alert("Muchas gracias por su pago, nos vemos en la fiesta!, el total es: $ " + precioFinal_1);
//          break;
//      case 2:        
//          alert("Muchas gracias por su pago, nos vemos en la fiesta!, el total es: $ " + precioFinal_2);
//          break;
//      case 3:        
//          alert("Muchas gracias por su pago, nos vemos en la fiesta!, el total es: $ " + total);
//          break;
//      default:
//          alert("Si estas buscando otra financiacion escribinos por privado");
//          break;
//  }


// class Producto{
//     constructor(nombre, precioCompra, precioVenta, cantidad){
//         this.nombre = nombre.toUpperCase()
//         this.precioCompra = precioCompra
//         this.precioVenta = precioVenta
//         this.cantidad = cantidad
//     }
// }

// function agregarProductos(){
//     let numeroSesiones = parseInt(prompt("Cuantas sesiones necesita ingresar"))
//     let sesiones = []

//     for(let index = 0; index < numeroSesiones; index++){
//         let nombre = prompt ("Ingrese su nombre")
//         let precioCompra = parseFloat(prompt("Ingrese el precio de compra de los materiales"))
//         let precioVenta = parseFloat(prompt("Ingrese el precio venta final"))
//         let cantidad = parseInt(prompt("Ingrese la cantidad de egresados"))

//         let sesionARegistrar = new Producto(nombre, precioCompra, precioVenta, cantidad)
//         sesiones.push(sesionARegistrar)
//     }

//     let productoNuevo = new Producto ("Producto 2", 100, 2000, 22)
//      sesiones.unshift(productoNuevo)

// return sesiones
// }

// function mostrarSesiones(sesiones){
//     for(const sesion of sesiones){
//         console.log(sesiones)
//         console.log(sesiones.nombre)
//     }
// }

// function main(){
//     let sesionesRegistradas = agregarProductos()
//     mostrarSesiones(sesionesRegistradas)
// }
// main()

// //forEach

// const numeros = [1,2,3,4,5,6]

// numeros.forEach ((numeros) =>{
// alert ()

// })


const egresados = [
    {apellido:"tejeda", cantidad: 4, precio:4000 },
    {apellido:"perez", cantidad: 2, precio:2000 },
    {apellido:"martinez", cantidad: 3, precio:3000 },
    {apellido:"cerri", cantidad: 5, precio:5000 },
]; 

//  let familiasInscriptas = egresados.some ((familia) => familia.egresados === "Azaña");
//  familiasInscriptas = egresados.some ((familia) => familia.egresados === "Rotela");
// //console.log ("Existe? "+ familiasInscriptas)


const nombreFamilia = prompt("Ingrese el apellido de su familia")
const familiaConfirmada = egresados.find((familia) => familia.apellido.toLowerCase() === nombreFamilia.toLowerCase())
console.log("La familia esta inscripta " + familiaConfirmada)




// const menorPrecio = egresados.filter((familia) => familias.precio < 4000);
//console.log ("Cuales son las familias que pagan menos? "+ menorPrecio)

// const listaFamilias = egresados.map((familia) => familias.familia);
// console.log(listaFamilias)

// //

// const numeros = [1,2,3,40,24,33];

// function sumaPorCondicion(array, funcionTest) {
//     let total = 0

//     for (const elemento of array){
//         if(funcionTest(elemento)){
//             total += elemento
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
// let total = sumaPorCondicion(numeros, condicionParaSuma)
// alert("el total es de:" + total)