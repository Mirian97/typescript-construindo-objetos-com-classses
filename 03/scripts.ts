type Produto = {
  descricao: string;
  valor: number;
  quantidade: number;
};

class Fatura {
  private nome: string;
  private transacoes: Produto[] = [];

  constructor(nome: string) {
    this.nome = nome;
  }

  registrarProduto(produto: Produto) {
    this.transacoes.push(produto);
  }

  fecharFatura(): string {
    let fatura = `Cliente: ${this.nome} \n \n`;
    let total = 0;

    for (let transacao of this.transacoes) {
      const { descricao, valor, quantidade } = transacao;
      total += valor * quantidade;
      let totalParcial = (valor * quantidade) / 100;
      fatura += `${quantidade} - ${descricao} (R$ ${(valor / 100).toFixed(
        2
      )}) = R$ ${totalParcial.toFixed(2)}\n`;
    }
    fatura += `\nTotal: R$ ${(total / 100).toFixed(2)}`;

    return fatura;
  }
}

const fatura = new Fatura("Mirian");
fatura.registrarProduto({
  descricao: "Camisa Preta",
  valor: 5990,
  quantidade: 2,
});
fatura.registrarProduto({
  descricao: "Camisa Azul",
  valor: 7900,
  quantidade: 1,
});
console.log(fatura.fecharFatura());
