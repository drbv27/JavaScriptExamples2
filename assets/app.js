/*Ejercicios Basicos JS Nivel 1
    5.Programa una función que invierta las palabras de una cadena de texto.Ejemplo: miFuncion("Hola Mundo") devolverá "odnuM aloH".
    6.Programa una función para contar el número de veces que se repite una palabra en un texto largo.Ejemplo: miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
    7.Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro).Ejemplo mifuncion("Salas") devolverá true.
    8.Programa una función que elimine cierto patrón de caracteres de un texto dado.Ejemplo: miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

//Soluciones:

//--------------------------------------------------------------------------------------------

//E5S1.Solucion Simple:
console.log("Ejercicio 5:")
console.log("-----------------------------------------------------------------------------------")
function invertir(cadena) {
    let x = cadena.length;
    let cadenaInvertida = "";
  
    while (x>=0) {
      cadenaInvertida = cadenaInvertida + cadena.charAt(x);
      x--;
    }
    return cadenaInvertida;
  }
console.log(invertir("Hola Mundo"))

//E5S2.Function Expression y for y validacion
const invertirT = function(cadena=""){
    let invertida =""
    if(!cadena){
        console.log("No escribiste una cadena")
    }else{
        for (let index = cadena.length; index >= 0; index--) {
            invertida = invertida+cadena.charAt(index)
        } 
    }
    return invertida;
}
console.log(invertirT("Otra Prueba"));

//E5S3 Arrow Function y Operador Ternario
const invertirA = (cadena="") =>{
    let invertida =""
    if(!cadena){
        console.log("No escribiste una cadena")
    }else{
        for (let index = cadena.length; index >= 0; index--) {
            invertida = invertida+cadena.charAt(index)
        } 
    }
    console.log(invertida)
}
invertirA("Una Mas")



//--------------------------------------------------------------------------------------------

//E6S1.Solución Simple
console.log("Ejercicio 6:")
console.log("-----------------------------------------------------------------------------------")


//--------------------------------------------------------------------------------------------

//E7S1.Solución Simple
console.log("Ejercicio 7:")
console.log("-----------------------------------------------------------------------------------")

//--------------------------------------------------------------------------------------------

//E8S1.Solucion Simple
console.log("Ejercicio 8:")
console.log("-----------------------------------------------------------------------------------")
