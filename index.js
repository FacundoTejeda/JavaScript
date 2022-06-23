
 
 
  for (let i = 1; i<=5; i++){
  let ingresarNombre = prompt("Ingrese su nombre")
   alert("Turno de fotos N°: "+i+" Nombre: "+ ingresarNombre)
    break
   }

 
//  let numero = parseInt (prompt("Que tabla queres saber?"))
//   let i= 1
//   do{
//       let resultado = numero*i
//       console.log(i+" X "+numero+ " = "+resultado)
//       i++
//   }
//   while(i<=10)
 


  let nombres = prompt("Ingresa el nombre de tu colegio")
  while(nombres != "ESC" ){
      switch (nombres) {
          case "Instituto Adventista Cordoba":
              alert ("Hola chicos de Cordoba");
              break;
          case "Instituto Adventista Balcarce":
              alert ("Hola chicos de Balcarce");
              break;
          case "Instituto Adventista Santa Fe":
              alert ("Hola chicos de Santa Fe");
              break;
          default:
              alert ("De que cole sos?");
              break;
      }
      nombres = prompt ("Ingresa tu colegio");
  }


 const sesionEgresados = 10000
 let cantidad = parseInt (prompt("Ingresar cantidad de alumnos que quieren la sesion (Hay descuentos por cantidad): "))

 function total (cantidad){
    let total = cantidad*sesionEgresados
    alert ("El total a abonar es de: $ " +total); 
 }
 
let formaPago = parseInt(prompt("En que forma van a querer abonar?: \n1. Si abonan en una cuota tienen un (15% de descuento) \n2. Si abonan en 3 cuotas tienen un (5% de descuento) \n3. Si abonan en 6 cuotas no tienen descuento" ))
while (formaPago !="ESC" ){
switch(pago) {
    case 1:        
        alert ("Muchas gracias por su pago, nos vemos en la fiesta!, el total es: $ " +total *porcentajeDescuento1);
        break;
    case 2:        
        alert ("Muchas gracias por su pago, nos vemos en la fiesta!, el total es: $ " +total * porcentajeDescuento2);
        break;
    case 3:        
        alert ("Muchas gracias por su pago, nos vemos en la fiesta!, el total es: $ " +total);
        break;
    default:
        alert ("Si estas buscando otra financiacion escribinos por privado");
        break;
}
}

let porcentajeDescuento1 = 0.15
let porcentajeDescuento2 = 0.05

