/* 
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta, 
e a escolha de condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo. 

- a vista débito, 10% de desconto. 
- a vista dinheiro ou pix, 15% de desconto 
- duas vezes, preço normal sem juros
- acima de duas vezes, preço normal + juros de 10%; 

*/ 

let valorTotalProduto; 
let valorEtiqueta = 1000; 
let desconto; 
let formaPagamento = ''; 
let parcelado = false;
let juros = 0.10;
let maisParcelas = true;

if (!parcelado && formaPagamento === 'debito'){
    desconto = 0.10;   
    valorTotalProduto = valorEtiqueta - (valorEtiqueta * desconto);
    console.log('Você ganhou 20% de desconto. Total: ', valorTotalProduto);
} else if (!parcelado && formaPagamento === 'dinheiro' || !parcelado && formaPagamento === 'pix'){
    desconto = 0.15;    
    valorTotalProduto = valorEtiqueta - (valorEtiqueta * desconto)
    console.log('Você ganhou 15% de desconto. Total: ', valorTotalProduto);
} else if (parcelado) {
    desconto = 0;
    valorTotalProduto = valorEtiqueta - (valorEtiqueta * desconto)
    console.log('Você está pagando parcelado em duas vezes. Total: ', valorTotalProduto);
} else if (maisParcelas){
    valorTotalProduto = valorEtiqueta + (valorEtiqueta * juros)
    console.log('Você está pagando parcelado e com juros. Total: ', valorTotalProduto);
}
    



