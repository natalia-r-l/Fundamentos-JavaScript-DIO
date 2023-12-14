/* Faça um programa para calcular o valor de uma viagem. 

Você terá 3 variáveis: 

1 - Preço do combustivel;
2 - Gasto médio de combustível do carro por KM; 
3 - Distância em KM da viagem; 

Imprima no console o valor que será gasto de combustível para realizar esta viagem. */

let precoCombustivel = 5.79;
let kmPorLitros = 12;
let distancia = 1580; 

let precoTotalCombustivel = (distancia / kmPorLitros) * precoCombustivel;



console.log("O valor gasto é: " + precoTotalCombustivel.toFixed(2));