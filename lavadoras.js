let tipoLavadora = parseInt(prompt("ingresar tipo de lavadora (1 o 2)"));
let cantidad = parseInt(prompt("ingresar cantidad de lavadoras"));
let horas = parseInt(prompt("ingresar horas de uso"));

// calcular costo
let costoPorHora = tipoLavadora === 1 ? 4000 : 3000;

// Cálculo del costo base
let costoBase = cantidad * horas * costoPorHora;

// descuento 3 lavadoras
let descuento = cantidad > 3 ? costoBase * 0.03 : 0;
let costoTotal = costoBase - descuento;

document.write(
    `Costo total por alquilar ${cantidad} lavadoras tipo ${tipoLavadora === 1 ? 'grande' : 'pequeña'} por ${horas} horas: $${costoTotal}.`
);