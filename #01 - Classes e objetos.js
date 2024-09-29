
class Pessoa {
    // O construtor inicializa os atributos nome e idade
    constructor(nome, anoNascimento) {
      this.nome = nome;
      this.anoNascimento = anoNascimento;
    }
  
    // Método getter para obter o nome
    getNome() {
      return this.nome;
    }
  
    // Método setter para definir o nome
    setNome(nome) {
      this.nome = nome;
    }
  
    // Método getter para obter o ano de nascimento
    getAnoNascimento() {
      return this.anoNascimento;
    }
  
    // Método setter para definir o ano de nascimento
    setAnoNascimento(anoNascimento) {
      this.anoNascimento = anoNascimento;
    }
  
    // Método para calcular a idade com base no ano atual
    calcularIdade() {
      const anoAtual = new Date().getFullYear();
      return anoAtual - this.anoNascimento;
    }
  }
  
  // Exemplo de uso:
  let pessoa1 = new Pessoa("João", 1995);
  
  console.log(pessoa1.getNome()); // Saída: João
  console.log(pessoa1.getAnoNascimento()); // Saída: 1995
  
  // Calculando a idade
  console.log(pessoa1.calcularIdade()); // Saída: (idade calculada com base no ano atual)
  
  // Atualizando os valores
  pessoa1.setNome("Maria");
  pessoa1.setAnoNascimento(1990);
  
  console.log(pessoa1.getNome()); // Saída: Maria
  console.log(pessoa1.calcularIdade()); // Saída: (idade atualizada)
  
