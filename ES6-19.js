mult= (multiplicador,...numeros) => {
    return numeros.map((elemento) => {
        return multiplicador * elemento;
    });
}

var salida = mult(2, 1, 2, 3);
console.log(salida);