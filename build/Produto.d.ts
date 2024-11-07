declare class Produto {
    private nome;
    private preco;
    private quantidade;
    constructor(nome: string, preco: number, quantidade: number);
    getNome(): string;
    setNome(nome: string): void;
    getPreco(): number;
    setPreco(preco: number): void;
    getQuantidade(): number;
    setQuantidade(quantidade: number): void;
    adicionarEstoque(qtd: number): void;
    removerEstoque(qtd: number): void;
    exibirInfo(): void;
}
declare const produto: Produto;
