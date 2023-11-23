function escreverNome(nome) {
    return 'Meu nome é ' + nome;
}

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escreverNome('Renan ') + 'Maior de Idade');
    } else {
        console.log('Menor de Idade');
    }
}

verificarIdade(18);