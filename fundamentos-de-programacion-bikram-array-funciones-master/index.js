let arrayVacio = [];

let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

arrayNumerosPares = [0, 2, 4, 6, 8];

arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']]


let num1=0;
let num2=0;

function suma(num1, num2) {
    return num1 + num2
}


let num10, num20;

function resta(num10, num20) {
  return num10 - num20
}
 
let a=7 
let b= 9
function potenciacion(a, b){
    return Math.pow(a, b) 
}


function separarPalabras(string){
    let stringo = string.split(" ");
    return stringo
}


let string1 = "";
let numero = 0;

function repetirString(string1, numero){
    return string1.repeat(numero)
} 

function esPrimo(numero) {
  

    for (var i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
  
    return true;
  } 


  function ordenarArray(array) {
   
    var newArray = array.slice();
  
    newArray.sort(function(a, b) {
      return a - b;
    });
  
    return newArray;
  }





    function obtenerPares(array) {
        var pares = [];
      
        for (var i = 0; i < array.length; i++) {
          if (array[i] % 2 === 0) {
            pares.push(array[i]);
          }
        }
      
        return pares;
      }
    

      let arr11 = []
      function pintarArray(arr11) {
        
        console.log(arr11)
  
  return arr11.toString();
  
   
}




function orrayMapi() {
    
}


let arrElim = []

function eliminarDuplicados(arrElim) {

    return 
    


}









let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]

let holaMundo = ['Hola', 'Mundo']


let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'] 

let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]



let num4, num5;
function multiplicacion(num4, num5) {

    return num4 * num5
    
}
function division(num6, num7) {

    return num6 / num7
    
}

function esPar(numEsPar){

if (numEsPar % 2 == 0) {
    return true
    
} else {
    return false 
}
}


let numResta1, numResta2;
  
function resta(numResta1, numResta2) {
    return numResta1 - numResta2
    
}




let arrayFunciones = [suma(num1, num2), resta(num10, num20), multiplicacion(num4, num5)]



function ordenarArray2(arr) {
    return arr.sort()
    
}


function obtenerImpares () {
    
}


function sumarArray(numArray) {
    
}

function multiplicarArray (params) {
    
}