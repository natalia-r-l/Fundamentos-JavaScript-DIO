function main() {
    nome = 'natalia'
    idade = 25
    console.log(escreverMeuNome(nome), validarIdade(idade));
}

main();

function escreverMeuNome(nome){
    return 'Meu nome é: ' + nome;
}

function validarIdade(idade){
    if(idade < 18){
        return 'Você é menor de idade';
    } else 
    return 'Você é maior de idade!!!';
}




