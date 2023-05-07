/*
 * 2- Crie uma classe para representar pessoas.
 * Para cada pessoa teremos os atributos nome, peso e altura.
 * As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = pesso / (altura * altura)).
 * Instanciar uma pessoa chamada José que tenha 70kg de pesso e 1,75 de altura e peça ao José para 
 * dizero valor do seu IMC.
 */

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura){
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularImc() {
    return this.peso / (this.altura * this.altura);
  }

  classificarImc() {
    const imc = this.calcularImc();
    if (imc < 18.5) {
      return ('Abaixo do peso');
    } else if (imc > 18.5 && imc < 24.99) {
      return ('Peso adequado');
    } else if (imc >= 25 && imc <= 29.99) {
      return ('Sobrepeso');
    } else if (imc >= 30 && imc <= 34.99 )  {
      return ('Obesidade grau 1');
    } else if (imc >= 35 && imc <= 39.99) {
      return ('Obesidade grau 2');
    } else  {
      return ('Obesidade extrema');
    }
  }
}

const jose = new Pessoa ('Jose', 170, 1.75);
console.log(jose.classificarImc());

const alex = new Pessoa ('Alex', 49, 1.80);
console.log(alex.classificarImc());







