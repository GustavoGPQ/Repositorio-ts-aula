"use strict";
class Funcionario {
    nomeF = "";
    salarioF = 0.0;
    constructor(nomeF, salarioF) {
        this.nomeF = nomeF;
        this.salarioF = salarioF;
    }
    getNomeF() {
        return this.nomeF;
    }
    setNomeF(nomeF) {
        this.nomeF = nomeF;
    }
    getSalarioF() {
        return this.salarioF;
    }
    setSalarioF(salarioF) {
        this.salarioF = salarioF;
    }
    exibirInformacoes() {
        console.log(`Nome: ${this.nomeF} Salario: ${this.salarioF}`);
    }
    aumentarSalario(percentual) {
        this.salarioF += (this.salarioF * (percentual / 100));
    }
}
const funcionario = new Funcionario('João', 2000);
funcionario.exibirInformacoes();
funcionario.aumentarSalario(10);
funcionario.exibirInformacoes();
