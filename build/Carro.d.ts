declare class Carro {
    private marca;
    private modelo;
    private ano;
    private quilometragem;
    constructor(marca: string, modelo: string, ano: number, quilometragem: number);
    getMarca(): string;
    setMarca(marca: string): void;
    getModelo(): string;
    setModelo(modelo: string): void;
    getAno(): number;
    setAno(ano: number): void;
    getQuilometragem(): string;
    setQuilometragem(quilometragem: number): void;
    exibirInformacoes(): void;
    andar(distancia: number): void;
}
declare const meuCarro: Carro;
