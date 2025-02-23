// Declarar las variables
let genero = prompt("ingrese su genero:");
let edad = prompt("ingrese su edad:");


let ayuda = 0;


if (genero === "femenino") {
    if (edad > 50) {
        ayuda = 120000;
    } else if (edad >= 30 && edad <= 50) {
        ayuda = 100000;
    } else {
        ayuda = 0;
    }
} else if (genero === "masculino") {
    ayuda = 40000;
} else {
    console.error("El género indicado no es válido.");
}

// mensaje
document.write(`El valor de ayuda mensual es: $${ayuda}.`);