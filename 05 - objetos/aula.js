

const pessoa = {
    nome: 'Renan',
    idade: 20,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

pessoa['nome'] = 'teste';
PermissionStatus.nome = 'teste';