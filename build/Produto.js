"use strict";
class Produto {
    nome = "";
    preco = 0;
    quantidade = 0;
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getPreco() {
        return this.preco;
    }
    setPreco(preco) {
        this.preco = preco;
    }
    getQuantidade() {
        return this.quantidade;
    }
    setQuantidade(quantidade) {
        this.quantidade = quantidade;
    }
    adicionarEstoque(qtd) {
        this.quantidade += qtd;
    }
    removerEstoque(qtd) {
        if (this.quantidade < qtd) {
            console.log("Remova  menos produtos do estoque");
        }
        else {
            this.quantidade -= qtd;
        }
    }
    exibirInfo() {
        console.log(`Nome: ${this.nome},  Preço: ${this.preco}, Quantidade: ${this.quantidade}`);
    }
}
const produto = new Produto('Camiseta', 50, 10);
produto.adicionarEstoque(5);
produto.removerEstoque(3);
produto.exibirInfo();
