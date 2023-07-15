
export class Car {
  private consumo: number;
  private combustivel: number;

  constructor(consumo: number) {
    this.consumo = consumo;
    this.combustivel = 0;
  }

  andar(distancia: number): void {
    const consumoCombustivel = distancia / this.consumo;
    if (consumoCombustivel <= this.combustivel) {
      this.combustivel -= consumoCombustivel;
      console.log(`O veículo percorreu ${distancia} km.`);
    } else {
      console.log(
        "Não há combustível suficiente para percorrer a distância especificada."
      );
    }
  }

  obterGasolina(): number {
    return this.combustivel;
  }

  adicionarGasolina(quantidade: number): void {
    this.combustivel += quantidade;
    console.log(
      `O tanque foi abastecido com ${quantidade} litros de combustível.`
    );
  }
}



