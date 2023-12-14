/* Faça um programa para calcular o valor de uma viagem

Serão três variáveis: 

1 - Preço do etanol;
2 - Preço da gasolina; 
3 - Tipo de combustível que está no carro; 
4 - Gasto médio de combustível do carro por km; 
5 - Distânica em KM. 

Imprima no console o valor que será gasto para realizar a viagem. 

*/

let precoEtanol = 5.79;
let precoGasolina = 8.99;
let kmPorLitros = 12;
let distancia = 1580; 
let tipoCombustível = "ETANOL"
let precoTotalCombustivel = 0;

if ( tipoCombustível === "GASOLINA"){
    precoTotalCombustivel = (distancia / kmPorLitros) * precoGasolina;
} else if (tipoCombustível === "ETANOL"){
    precoTotalCombustivel = (distancia / kmPorLitros) * precoEtanol;
}

console.log(precoTotalCombustivel.toFixed(2));