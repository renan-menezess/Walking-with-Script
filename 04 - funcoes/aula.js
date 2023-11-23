

function incrementarJuros(valor, percentualJuros) {
    const valosDeAcrescimo = (percentualJuros / 100) * valor;
    return valor +valosDeAcrescimo
}

console.log(incrementarJuros (100, 10));
console.log(incrementarJuros (100, 15));
console.log(incrementarJuros (100, 20));
