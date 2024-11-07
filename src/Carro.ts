class Carro {
    private marca: string = "";
    private modelo: string = "";
    private ano: number = 0;
    private quilometragem: number = 0;

    constructor(
        marca: string,
        modelo: string,
        ano: number,
        quilometragem: number
    ) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.quilometragem = quilometragem;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public getAno(): number {
        return this.ano;
    }

    public setAno(ano: number): void {
        this.ano = ano;
    }

    public getQuilometragem(): string {
        return this.quilometragem.toString();
    }

    public setQuilometragem(quilometragem: number): void {
        this.quilometragem = quilometragem;
    }

    public exibirInformacoes(): void {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Quilometragem: ${this.quilometragem} km`);
    }

    public andar(distancia: number): void {
        this.quilometragem += distancia;
        console.log(`O carro andou ${distancia} km.`);
    }
}


const meuCarro = new Carro('Toyota', 'Corolla', 2020, 15000);
meuCarro.exibirInformacoes(); 
meuCarro.andar(100); 
meuCarro.exibirInformacoes(); 
