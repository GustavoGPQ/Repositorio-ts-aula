class Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
    private disponivel: boolean;
  
    constructor(titulo: string, autor: string, anoPublicacao: number, disponivel: boolean) {
      this.titulo = titulo;
      this.autor = autor;
      this.anoPublicacao = anoPublicacao;
      this.disponivel = disponivel;
    }
  
    emprestar(): void {
      if (this.disponivel) {
        this.disponivel = false;
        console.log("Livro emprestado com sucesso.");
      } else {
        console.log("Livro não disponível.");
      }
    }
  
    devolver(): void {
      if (!this.disponivel) {
        this.disponivel = true;
        console.log("Livro devolvido com sucesso.");
      } else {
        console.log("O livro já está disponível.");
      }
    }
  
    exibirInformacoes(): void {
      console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.anoPublicacao}, Disponível: ${this.disponivel}`);
    }
  }
  
  const livro = new Livro('Dom Casmurro', 'Machado de Assis', 1899, true);
  livro.exibirInformacoes();
  livro.emprestar();
  livro.emprestar();
  livro.devolver();
  livro.exibirInformacoes();
  