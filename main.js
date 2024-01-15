
//VARIABLES, FUNCIONES CON ITERACION, CICLOS, USO DE CONSOLA, CUADROS DE DIALOGO, PROMPT, ALERT Y ARRAY

let intentos =1;
let identificar = true;



do{
    const nombre = prompt ("escriba su nombre, (solo 3 intentos)")
    let apellido = prompt ("escriba su apellido, (solo 3 intentos)")
    

   if (nombre ==""){
      alert("Debe ingresar nombre y apellido")
      break
   }
   if ((nombre == "Lionel") && (apellido == "Messi") && (intentos<=3)) {
    alert("Usted realizo su reserva correctamente, haga su pedido" )  
    console.log("haga su pedido")
    identificar = false;
}else if((nombre!="Lionel")||(apellido!= "Messi")){
    alert("no se identica al usuario: " + nombre)
    intentos++
    if (intentos>3){
        alert("usted supero los 3 intentos")
        break
}else{
    alert("Error, usted no realizo ninguna reserva,  reserve para poder hacer su pedido, Muchas Gracias")   
    console.warn("no puede hacer el pedido, primero registrese")
  
       }
    }
}
while(identificar)




//ARRAYS
let entrada = prompt ("ingresa que tipo de pizza te gusta")
let miArray = ["Muzarella", "Jamon", "Morron", "Caprese", "Napolitana", "A la Piedra"]

while(entrada!==null){
    miArray.push(entrada)
    entrada =prompt("ingresa otro pedido o presione cancelar")
}
console.table(miArray)










