class Carro {
    marca;
    cor;
    gastoMedioCombustivelPorKm;  

    constructor(marca, cor, gastoMedioCombustivelPorKm){
        this.marca = marca;
        this.cor = cor; 
        this.gastoMedioCombustivelPorKm = gastoMedioCombustivelPorKm;      
    }

    calcularGastoViagem(precoCombustivel, distanciaEmKm){            
        return distanciaEmKm * this.gastoMedioCombustivelPorKm * precoCombustivel;    
    }

}

const celta = new Carro('Chevrolet','Azul', 1/12);
console.log(`O carro ${celta.marca}, ${celta.cor}, gasta ${celta.calcularGastoViagem(70, 5)}`);


const palio = new Carro('Fiat','Vermelho', 1/10);
console.log(`O carro ${palio.marca}, ${palio.cor}, gasta ${palio.calcularGastoViagem(70, 5)}`);