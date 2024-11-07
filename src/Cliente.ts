class Cliente{

    private nome: string = "";
    private email: string = "";
    private telefone: number = 0;


    constructor(nome: string,  email: string,  telefone: number) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;


    }

    public getNome(): string{
        return this.nome;
    }

    public setName(nome: string): void{
        this.nome = nome;
    }


    public getEmail(): string{
        return this.email;
    }

    public setEmail(email: string): void{
        this.email = email;
    }

    public getTelefone(): number{
    return this.telefone;
    
    }

    public setTelefone(telefone: number): void{
        this.telefone = telefone;
    }

   public atualizarEmail(novoEmail: string): void{
    this.email = novoEmail;

   }

   atualizarTelefone(novoTelefone: number): void{
    this.telefone = novoTelefone;
   }

    public exibirInformacoes(): void{
        console.log(`Nome: ${this.nome}, Email: ${this.email}, Telefone: ${this.telefone}`);
    }
}

const Verinfo  = new Cliente("João", "joaozin@gmail.com", 53991179785);

Verinfo.exibirInformacoes(); 
Verinfo.atualizarEmail("joaozin2@gmail.com");
Verinfo.atualizarTelefone(53991179785);
Verinfo.exibirInformacoes();
