class Lampada {
  private potencia: number;
  private estado: boolean;

  constructor(potencia: number) {
    this.potencia = potencia;
    this.estado = false;
  }

  ligar(): boolean {
    return (this.estado = true);
  }

  desligar(): boolean {
    return (this.estado = false);
  }

  medirPotencia(): string {
    return `A potência da lâmpada é ${this.potencia} watts`;
  }
}

const lampada = new Lampada(1000);
lampada.ligar();
lampada.desligar();
console.log(lampada.medirPotencia());
