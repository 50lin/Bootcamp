// ejercicio 1
let variableSinValor;

// ejercicio 2

let booleano1 = true;
let booleano2 = true;

// ejercicio 3
const PI = 3.14;

// ejercicio 4
const TAU = 2 * PI;

// ejercicio 5//

let booleanoAnd = booleano1 && booleano2;

// ejercicio 6
let booleanoNot = !booleano1;


// ejercicio 7

let booleanoMix0 = (booleano1 || booleano2)
    && (booleano1 || !(booleano1 && booleano2))

// ejercio 8

let incrementarDesp = 2;
let resultadoDesp = 0;

resultadoDesp += (incrementarDesp++);


// ejercio 9

let incrementarAntes = 2;
let resultadoAntes = 0;

resultadoAntes += (++incrementarAntes);


// ejercio 10
let contarHasta10_2 = 0;

for (let i = contarHasta10_2; i <= 10; i++) {

    contarHasta10_2 = i;
}


//ejercicio11

let postJ = 0;
let postI = 0;

for (postJ = 0; postJ < 11; postJ++) {
    postI = postI + postJ
}

//ejercicio12
let sumaPares = 0;

for (let i = 0; i < 10; i++) {

    if (i % 2 == 0) {

        sumaPares = i + sumaPares
    }
}

// ================================= individual

//ejercicio13

let variableValorNumerico = 3; 

//ejercicio14

const MiNombre = "Lino hadeed"

//ejercicio15

const MiNumeroFav = 4; 

//ejercicio16
let booleanoOr = booleano1 || booleano2;

//ejercicio17
let booleanoMix1 = (booleano1 && (TAU/2 == PI)) || (variableValorNumerico >= MiNumeroFav); 

//ejercicio18
let seisNoEsNueve = 6 !== 9;

//ejercicio19
let booleanoMix2 = variableValorNumerico > 0 || -(MiNumeroFav * TAU)
console.log(booleanoMix2)
//ejercicio20

let valorSuma = MiNumeroFav + variableValorNumerico;

//ejercicio21

let valorResta = MiNumeroFav - variableValorNumerico;

//ejercicio22
let valorMultiplicacion = MiNumeroFav * variableValorNumerico;

//ejercicio23

let valorDivision = MiNumeroFav / 3;

//ejercicio24
let contarHasta10 = 0;

while (contarHasta10 < 10) {
    contarHasta10++;    
}

//ejercicio25
let preI = 0;
let preJ = 0;

for (let i = 0; i < 11; i++) {
    preI= preI + (++preJ)   
}

//ejercicio26

let sumaImpares = 0;

for (let i = 0; i < 10; i++) {
    
    if (i % 2 == 1) {

        sumaImpares += i;
    
    }
    
}

