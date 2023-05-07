/*
 * 1-Crie uma classe para representar carros.
 * Os carros possuem uma marca, uma cor e um gasto médio de combustível por kilometro rodado.
 * Crie um método que dado a quantidade de kilometros e o preço do combustível nos dê o valor
 * gasto em reais para realizar este percuso.
 */

class Carro {
  marca;
  cor;
  gastoMedioPorKm;

  constructor(marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }

  calcularGastoDePercuso(distanciaEmKm, precoCombustivel) {
    return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;  
  }
}

const uno = new Carro('Fiat', 'preto', 1 / 12);
console.log(uno);

uno.calcularGastoDePercuso(70, 5.75);
console.log(uno.calcularGastoDePercuso(70, 5.75));

const palio = new Carro('Fiat', 'vermelho', 1/10);
console.log(palio);

palio.calcularGastoDePercuso(70, 5.75);
console.log(palio.calcularGastoDePercuso(70, 5.75));