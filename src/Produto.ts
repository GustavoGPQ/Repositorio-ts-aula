class Produto{
    private nome: string = "";
    private preco: number = 0;
    private quantidade: number = 0;



    constructor( nome: string, preco: number, quantidade: number) {
       
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    
    public getNome() : string {
        return this.nome;
    }

    
    public setNome(nome: string): void {
        this.nome = nome;
    }

    
    public getPreco() : number {
        return this.preco;
    }


    
    public setPreco(preco : number): void {
        this.preco = preco;
    }
    

    
    public getQuantidade() : number {
        return this.quantidade;
    }
    
    
    
    public setQuantidade (quantidade: number): void {
        this.quantidade = quantidade;
    }
    
    
    
   public adicionarEstoque(qtd: number): void{
        this.quantidade += qtd;
    }

   public removerEstoque(qtd: number): void{
        if(this.quantidade < qtd) {
            console.log("Remova  menos produtos do estoque");
        }else{
            this.quantidade -= qtd;
        }
    }
    public exibirInfo(): void{
        console.log(`Nome: ${this.nome},  Preço: ${this.preco}, Quantidade: ${this.quantidade}`);
    }
}



const  produto = new Produto('Camiseta', 50, 10);
produto.adicionarEstoque(5);
produto.removerEstoque(3);
produto.exibirInfo();
