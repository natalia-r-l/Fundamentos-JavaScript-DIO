class Pessoa {
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;       
    }
}

function compararIdades(pessoa1, pessoa2){
    if(pessoa1.idade < pessoa2.idade){
        console.log(`${pessoa1.nome} é mais nova que ${pessoa2.nome}`);
    } else if (pessoa1.idade > pessoa2.idade){
        console.log(`${pessoa1.nome} é mais velha que ${pessoa2.nome}`);
    } else {
        console.log(`${pessoa1.nome} e ${pessoa2.nome} têm a mesma idade`);
    }
}

const natalia = new Pessoa('Natalia', 33);
const andre = new Pessoa('Andre', 35);

compararIdades(natalia, andre);