"use strict";
class Livro {
    titulo = "";
    autor = "";
    anoPublicado = 0;
    disponivel = true;
    constructor(titulo, autor, anoPublicado, disponivel) {
        this.titulo,
            this.autor,
            this.anoPublicado,
            this.disponivel;
    }
    getTitulo() {
        return this.titulo;
    }
    SetTitulo(titulo) {
        this.titulo = titulo;
    }
    getAutor() {
        return this.autor;
    }
    setAutor(autor) {
        this.autor = autor;
    }
    getAnoPublicado() {
        return this.anoPublicado;
    }
    setAnoPublicado(anoPublicado) {
        this.anoPublicado = anoPublicado;
    }
    getDisponivel() {
        return this.disponivel;
    }
    setDisponivel(disponivel) {
        this.disponivel = disponivel;
    }
    emprestar() {
        this.disponivel = false;
    }
    devolver() {
        this.disponivel = true;
    }
    exibirInformacoes() {
        console.log(`Livro: ${this.titulo}, Autor: ${this.autor}, Ano de publicado: ${this.anoPublicado}, Disponibilidade: ${this.disponivel}`);
    }
}
const livro = new Livro('Dom Casmurro', 'Machado de Assis', 1899, true);
livro.exibirInformacoes();
livro.emprestar();
livro.emprestar();
livro.devolver();
livro.exibirInformacoes();
