const nome = 'Natalia Resina';

/*
for (let i = 0; i < nome.length; i++ ){
    console.log(nome[i]);
}*/

const notas = [];

notas.push(5);
notas.push(6);
notas.push(10);
notas.push(8);
notas.push(2);
notas.push(6);

let soma = 0;

for (let i = 0; i < notas.length; i++){
    const nota = notas[i];

    soma = soma + nota;
}

const media = soma / notas.length;

console.log(media);