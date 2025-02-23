let operadorCelular = prompt("Ingrese el operador que utiliza actualmente (Claro, Tigo, Movistar)").toLowerCase();
let internacional = parseInt(prompt("Ingrese la cantidad de minutos internacionales que desea"), 10);

let cargoFijo = 0;
let valorMinutoInternacional = 0;
let valorPaqueteDatos = 0;

switch (operadorCelular) {
    case "tigo":
        cargoFijo = 45000;
        valorMinutoInternacional = 200;
        valorPaqueteDatos = 12000;
        break;
    case "claro":
        cargoFijo = 30000;
        valorMinutoInternacional = 100;
        valorPaqueteDatos = 18000;
        break;
    case "movistar":
        cargoFijo = 40000;
        valorMinutoInternacional = 250;
        valorPaqueteDatos = 8000;
        break;
    default:
        document.write("Operador no válido. Por favor, ingrese Claro, Tigo o Movistar.");
        break;
}

if (cargoFijo !== 0) {
    let costoLlamadasInternacionales = internacional * valorMinutoInternacional;
    let total = cargoFijo + costoLlamadasInternacionales + valorPaqueteDatos;

    document.write(`Resumen de su paquete con ${operadorCelular.charAt(0).toUpperCase() + operadorCelular.slice(1)}:
    - Cargo fijo: $${cargoFijo}
    - Costo minutos internacionales: $${costoLlamadasInternacionales}
    - Valor paquete de datos: $${valorPaqueteDatos}
    - Total a pagar: $${total}`);
}
