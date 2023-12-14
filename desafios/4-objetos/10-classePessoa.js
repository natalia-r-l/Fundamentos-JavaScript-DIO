class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, altura, peso){
        this.nome = nome;
        this.altura = altura;       
        this.peso = peso; 
    }

    calculoIMC(){
        const alturaAoQuadrado = this.altura * this.altura;
        return this.peso / alturaAoQuadrado ;
    }

    classificarIMC(){
        const imc = this.calculoIMC();

        if (imc < 18.5){
            return ('abaixo do peso');
        } else if (imc >= 18.5 && imc < 25) {
            return ('peso normal');
        } else if (imc >= 25 && imc < 30)   {
            return ('acima do peso');
        } else if (imc >= 30 && imc < 40)   {
            return ('obesidade');
        } else {
            return ('obesidade grave');
        }
    }
}

const pessoa = new Pessoa('José', 70, 1.57);
console.log(`Meu nome é ${pessoa.nome}, e meu IMC é ${pessoa.calculoIMC()}, ${pessoa.classificarIMC()}`);

