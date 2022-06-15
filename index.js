// for (let i = 1; i<=5; i++){
//     let ingresarNombre = prompt("Ingrese su nombre")
//     alert("Turno N°: "+i+" Nombre: "+ ingresarNombre)
//     break
// }

// //while y dowhile//
// // let entrada = prompt("Ingrese un dato (ESC para salir)")
// // while(entrada !== "ESC"){
// //     alert ("El usuario ingreso: "+ entrada)
// //     entrada = prompt("Ingresa otro dato")
// // }

let numero = parseInt (prompt("Que tabla queres saber?"))
let i= 1
do{
    let resultado = numero*i
    console.log(i+" X "+numero+ " = "+resultado)
    i++
}while(i<=10)
