declare class Funcionario {
    private nomeF;
    private salarioF;
    constructor(nomeF: string, salarioF: number);
    getNomeF(): string;
    setNomeF(nomeF: string): void;
    getSalarioF(): number;
    setSalarioF(salarioF: number): void;
    exibirInformacoes(): void;
    aumentarSalario(percentual: number): void;
}
declare const funcionario: Funcionario;
