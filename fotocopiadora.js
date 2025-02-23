let copias = parseInt(prompt("inserte el numero de copias que desea imprimir"))



if (copias <= 499) {
    document.write("El valor de cada copia es de $120. ")
    costo1 = 120 * copias
    document.write("El costo total es de $" + costo1 + "")
}
else if (copias > 499 && copias <= 750){
    document.write("El valor de cada copia es de $100. ")
    costo2 = 100 * copias
    document.write("El costo total es de $" + costo2 + "")
}
else if (copias >= 750 && copias <= 999){
    document.write("El valor de cada copia es de $80. ")
    costo3 = 80 * copias
    document.write("El costo total es de $" + costo3 + "")
}
else if (copias >= 1000){
    document.write("El valor de cada copia es de $ 60. ")
    costo4 = 60 * copias
    document.write("El costo total es de $" + costo4 + "")
}













