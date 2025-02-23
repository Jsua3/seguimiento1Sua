// coloque un numero cualquiera
let numero = parseInt(prompt("ingrese un numero"));

//saber si es par o impar
let par;
let impar;

//calcular
if (numero % 2 == 0) {
    par = true;
    impar = false;
} else {
    par = false;
    impar = true;
}

//mensaje
document.write(`su numero es  ${par ? "par" : "impar"}`);