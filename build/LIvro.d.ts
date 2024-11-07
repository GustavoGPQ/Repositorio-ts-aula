declare class Livro {
    private titulo;
    private autor;
    private anoPublicado;
    private disponivel;
    constructor(titulo: string, autor: string, anoPublicado: number, disponivel: boolean);
    getTitulo(): string;
    SetTitulo(titulo: string): void;
    getAutor(): string;
    setAutor(autor: string): void;
    getAnoPublicado(): number;
    setAnoPublicado(anoPublicado: number): void;
    getDisponivel(): boolean;
    setDisponivel(disponivel: boolean): void;
    emprestar(): void;
    devolver(): void;
    exibirInformacoes(): void;
}
declare const livro: Livro;
