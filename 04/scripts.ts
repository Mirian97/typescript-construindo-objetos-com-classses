class Pessoa {
  constructor(
    private nome: string,
    private idade: number,
    private nomeDoPai: string,
    private nomeDaMae: string
  ) {}

  verificarIrmandade(pessoa: Pessoa): boolean {
    return (
      pessoa.nomeDaMae === this.nomeDaMae || pessoa.nomeDoPai === this.nomeDoPai
    );
  }

  verificarIdade(pessoa: Pessoa): boolean {
    return this.idade > pessoa.idade;
  }
}

const mirian = new Pessoa("Mirian", 25, "Eugenio", "Lidia");
const paulo = new Pessoa("Paulo", 25, "Marcelo", "Lidia");

console.log(mirian.verificarIrmandade(paulo));
console.log(mirian.verificarIdade(paulo));
