/* Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 a 100. Faça um programa que receba 
os 5 números sorteados para os alunos e mostre o maior número sorteado.

*/

const {gets, print} = require('./funcoes-auxiliares');

let maiorValor = 0;

for (let i = 0; i < 5; i++) {
    const numerosSorteado = gets();
    if (numerosSorteado > maiorValor){
        maiorValor = numerosSorteado;
    }
    
}

print(maiorValor);


