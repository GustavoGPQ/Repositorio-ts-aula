declare class Cliente {
    private nome;
    private email;
    private telefone;
    constructor(nome: string, email: string, telefone: number);
    getNome(): string;
    setName(nome: string): void;
    getEmail(): string;
    setEmail(email: string): void;
    getTelefone(): number;
    setTelefone(telefone: number): void;
    atualizarEmail(novoEmail: string): void;
    atualizarTelefone(novoTelefone: number): void;
    exibirInformacoes(): void;
}
declare const Verinfo: Cliente;
