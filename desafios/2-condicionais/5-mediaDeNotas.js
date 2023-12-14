/* Faça um programa que dado as 3 notas tiradas por aluno em um semestre da faculdade, calcule e 
imprima a sua média e a sua classificação conforme a tabela abaixo: 

média = (nota 1 + nota 2 + nota 3) / 3;

Classficiação : 
- média menonr que 5, reprovação;
- média entre 5 e 7, recuperação; 
- média acima de 7, aprovado; 
*/

let nota1 = 5;
let nota2 = 5;
let nota3 = 5;

let media = (nota1 + nota2 + nota3)/3;

if (media < 5){
    console.log('Você está reprovado');
} else if (media >= 5 && media <= 7 ){
    console.log('Você está de recuperação');
} else {
    console.log('Você está aprovado');
}
