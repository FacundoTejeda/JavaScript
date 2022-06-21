 let precio =100;
 if (precio < 20){
    alert ("El precio es menor que 20")
 } else if (precio < 50){
    alert ("El precio es menor que 50")
 } else if (precio < 70){
    alert ("El precio es menor que 70")
 }
 else ("El precio llego a los 100")
 
 
 
 
 for (let i = 1; i<=5; i++){
 let ingresarNombre = prompt("Ingrese su nombre")
   alert("Turno N°: "+i+" Nombre: "+ ingresarNombre)
   break
  }

// // //while y dowhile//
  let entrada = prompt("Ingrese un dato (ESC para salir)")
  while(entrada !== "ESC"){
      alert ("El usuario ingreso: "+ entrada)
     entrada = prompt("Ingresa otro dato")
  }

 let numero = parseInt (prompt("Que tabla queres saber?"))
  let i= 1
  do{
      let resultado = numero*i
      console.log(i+" X "+numero+ " = "+resultado)
      i++
  }
  while(i<=10)
 


 let nombres = prompt("Ingresa tu nombre")
 while(nombres != "ESC" ){
     switch (nombres) {
         case "FACUNDO":
             alert ("Buen dia Facundo");
             break;
         case "IVON":
             alert ("Buen dia Ivon");
             break;
         case "VALEN":
             alert ("Buen dia Valen");
             break;
         default:
             alert ("Quien sos?");
             break;
     }
     entrada = prompt ("Ingresa tu nombre");
 }

 const comisiones = function (montoUno, montoDos){
     let suma = montoUno*montoDos*0.05
     alert ("La comision que vas a abonar es : $" +suma)
 }
 let montoUno= parseFloat (prompt("Ingrese el valor del alquiler "))
 let montoDos= parseFloat (prompt("Ingrese la cantidad de meses del contrato "))

 comisiones (montoUno,montoDos)