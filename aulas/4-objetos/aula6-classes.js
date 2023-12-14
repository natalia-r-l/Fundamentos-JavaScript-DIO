class Pessoa {

    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const natalia = new Pessoa('Natalia', 33);
const andre = new Pessoa('Andre', 35);

console.log(natalia);
natalia.descrever();
andre.descrever();