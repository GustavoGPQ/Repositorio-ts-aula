"use strict";
class Carro {
    marca = "";
    modelo = "";
    ano = 0;
    quilometragem = 0;
    constructor(marca, modelo, ano, quilometragem) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.quilometragem = quilometragem;
    }
    getMarca() {
        return this.marca;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    getModelo() {
        return this.modelo;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    getAno() {
        return this.ano;
    }
    setAno(ano) {
        this.ano = ano;
    }
    getQuilometragem() {
        return this.quilometragem.toString();
    }
    setQuilometragem(quilometragem) {
        this.quilometragem = quilometragem;
    }
    exibirInformacoes() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Quilometragem: ${this.quilometragem} km`);
    }
    andar(distancia) {
        this.quilometragem += distancia;
        console.log(`O carro andou ${distancia} km.`);
    }
}
const meuCarro = new Carro('Toyota', 'Corolla', 2020, 15000);
meuCarro.exibirInformacoes();
meuCarro.andar(100);
meuCarro.exibirInformacoes();
