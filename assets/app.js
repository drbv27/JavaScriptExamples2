/*Ejercicios Basicos JS Nivel 2
    5.Programa una función que invierta las palabras de una cadena de texto.Ejemplo: miFuncion("Hola Mundo") devolverá "odnuM aloH".
    6.Programa una función para contar el número de veces que se repite una palabra en un texto largo.Ejemplo: miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
    7.Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro).Ejemplo mifuncion("Salas") devolverá true.
    8.Programa una función que elimine cierto patrón de caracteres de un texto dado.Ejemplo: miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

//Soluciones:

//--------------------------------------------------------------------------------------------

//E5S1.Solucion Simple:
console.log("-----------------------------------------------------------------------------------")
console.log("Ejercicio 5:")
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

//E5S3 Arrow Function 
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

//E5S4 ArrowF - Operador ternario y array methods
const invertirCadena = (cadena="") =>
(!cadena)
?console.warn("No ingresate ningun texto")
:console.info(cadena.split("").reverse().join(""));//convierto el string a array, lo invierto con reverse y lo vuelvo a unir con join

invertirCadena("Haciendo una Prueba");

//--------------------------------------------------------------------------------------------

//E6S1.Solución Simple
console.log("-----------------------------------------------------------------------------------")
console.log("Ejercicio 6:")
function repetido (miCadena){
    cuenta = 0;
    posicion = miCadena.indexOf("mundo");
    while ( posicion != -1 ) {
        cuenta++;
        posicion = miCadena.indexOf("mundo",posicion+1);
}
console.log(cuenta)
}
repetido("hola mundo adios mundo, en mi mundo", "mundo")

//E6S2 ARROW FUNCTION
const textoEnCadena = (cadena="", texto="") =>{
    if (!cadena)return console.warn("No ingresaste el texto largo");
    if (!texto)return console.warn("No ingresaste la palabra a buscar");

    let i = 0,
        contador = 0;
    
    while(i!==-1){
        i=cadena.indexOf(texto, i);
        if(i!=-1){
            i++;
            contador++;
        }
    }
    return console.info(`La palabra "${texto}" se repite ${contador} veces`)
}

textoEnCadena("En mi mundo yo saludo: hola mundo", "mundo")


//--------------------------------------------------------------------------------------------

//E7S1.Solución Simple
console.log("-----------------------------------------------------------------------------------")
console.log("Ejercicio 7:")
function palindromo(texto) {
    let invertida =""
    if(!texto){
        console.log("No escribiste una cadena")
    }else{
        for (let index = texto.length; index >= 0; index--) {
            invertida = invertida+texto.charAt(index)
        } 
    }
    const textoi = invertida;
    (texto === textoi)
    ?console.log(`la palabra "${texto}" es un palindromo`)
    :console.log(`la palabra "${texto}" NO es un palindromo`)
}
palindromo("salas");

//E7S2
const palindrom = (palabra="") =>{
    if (!palabra)return console.warn("No ingresaste la palabra a evaluar");

    palabra = palabra.toLocaleLowerCase();//para asegurarme por si ponen la primera en mayuscula
    let alReves = palabra.split("").reverse().join("");
    return(palabra === alReves)
    ?console.info(`La palabra "${palabra}" es palindroma.`)
    :console.log(`La palabra "${palabra}" no es palindroma.`)
}
palindrom("perro")

//--------------------------------------------------------------------------------------------

//E8S1.Solucion Simple
console.log("-----------------------------------------------------------------------------------")
console.log("Ejercicio 8:")

const eliminarCaracteres = (texto="", patron="") =>
(!texto)
    ? console.warn("No ingresaste un texto")
    :(!patron)
        ? console.warn("No ingresaste un patron")
        :console.info(texto.replace(new RegExp(patron, "ig"),""))

eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")