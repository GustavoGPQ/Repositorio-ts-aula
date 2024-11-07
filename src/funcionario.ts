class Funcionario{
    private nomeF:  string = "";
    private salarioF: number = 0.0;

  


    constructor(nomeF:  string,  salarioF: number){
        this.nomeF = nomeF;
        this.salarioF = salarioF;
      
     
    }


    
    public getNomeF() : string {
        return this.nomeF;
    }
    
    
    public setNomeF(nomeF: string): void {
        this.nomeF = nomeF;
    }
    
    


    public getSalarioF(): number{
        return this.salarioF;
    }

    public setSalarioF(salarioF: number): void{
        this.salarioF = salarioF;
    }

    public exibirInformacoes(): void{
        console.log(`Nome: ${this.nomeF} Salario: ${this.salarioF}`);
    }
    
    public aumentarSalario(percentual: number): void{
        this.salarioF += (this.salarioF * (percentual / 100));
    }

}
const funcionario = new Funcionario('João', 2000);
funcionario.exibirInformacoes();
funcionario.aumentarSalario(10);
funcionario.exibirInformacoes(); 