/* 
Fórmula do IMC: 

IMC = peso/(altura * altura)

Abaixo de 18.5 -> abaixo do peso; 
Entre 18.5 e 25 -> peso normal; 
Entre 25 e 30 -> acima do peso; 
Entre 30 e 40 -> obesa; 
Acima de 40 -> Obesidade grave; 
*/ 

let peso = 60; 
let altura = 1.57; 
let imc = peso/(altura * altura)

if ( imc < 18.5){
    console.log('abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('acima do peso');
} else if (imc >= 30 && imc < 40){
    console.log('obesa');
} else {
    console.log('Obesidade grave');
}