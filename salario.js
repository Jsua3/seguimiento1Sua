
let nombre = prompt("Ingrese su nombre");
let horas = prompt("ingrese las horas trabajadas");

//cálculo del salario
let tarifaPorHora;
let salario;

// Determinar salario por hora
if (horas <= 10) {
    tarifaPorHora = 30000;
} else if (horas > 10) {
    tarifaPorHora = 33000;
}

// Calcular salario
salario = horas * tarifaPorHora;

// Mostrar mensaje
document.write(`Señor/a ${nombre}, el número de horas es ${horas} y su salario equivale a $${salario}.`);