"use strict";
class Cliente {
    nome = "";
    email = "";
    telefone = 0;
    constructor(nome, email, telefone) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
    getNome() {
        return this.nome;
    }
    setName(nome) {
        this.nome = nome;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getTelefone() {
        return this.telefone;
    }
    setTelefone(telefone) {
        this.telefone = telefone;
    }
    atualizarEmail(novoEmail) {
        this.email = novoEmail;
    }
    atualizarTelefone(novoTelefone) {
        this.telefone = novoTelefone;
    }
    exibirInformacoes() {
        console.log(`Nome: ${this.nome}, Email: ${this.email}, Telefone: ${this.telefone}`);
    }
}
const Verinfo = new Cliente("João", "joaozin@gmail.com", 53991179785);
Verinfo.exibirInformacoes();
Verinfo.atualizarEmail("joaozin2@gmail.com");
Verinfo.atualizarTelefone(53991179785);
Verinfo.exibirInformacoes();
