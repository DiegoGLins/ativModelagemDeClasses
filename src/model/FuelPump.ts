enum PriceFuel {
  gasolina = 4.89,
  etanol = 3.57,
}

interface TypeFuel {
  tipo: "gasolina" | "etanol";
}

class FuelPump {
  quantidadeCombustivel: number;
  private totalBombaEtanol: number;
  private totalBombaGasolina: number;

  constructor(
    protected tipoCombustivel: TypeFuel,
    protected valorLitro:  PriceFuel.gasolina | PriceFuel.etanol
  ) {
    this.tipoCombustivel = tipoCombustivel;
    this.valorLitro = valorLitro;
    this.quantidadeCombustivel = 0;
    this.totalBombaGasolina = 300;
    this.totalBombaEtanol = 300;
  }

  abastecerPorValor(valor: number, tipoCombustivel: TypeFuel) {
    if (tipoCombustivel.tipo? "gasolina" : PriceFuel.gasolina) {
      const abastecimentoGasolina = valor / PriceFuel.gasolina;
      const totalBombaGasolina = parseFloat(this.totalBombaGasolina.toFixed(2));
      if (totalBombaGasolina < abastecimentoGasolina) {
        totalBombaGasolina;
        console.log(
          `A quantidade de combustivel de: ${totalBombaGasolina.toFixed(
            2
          )} litros na bomba, \n é insuficiente para abastecimento`
        );
        return;
      } else {
        this.quantidadeCombustivel = parseFloat(
          abastecimentoGasolina.toFixed(2)
        );
        this.totalBombaGasolina =
          totalBombaGasolina - this.quantidadeCombustivel;
        console.log(
          `Abastecimento de gasolina de: ${abastecimentoGasolina.toFixed(
            2
          )} litros. Total a pagar: R$ ${valor.toFixed(2)} reais`
        );
      }
      return abastecimentoGasolina;
    }
    if (tipoCombustivel.tipo? "etanol" : PriceFuel.etanol) {
      const abastecimentoEtanol = valor / PriceFuel.etanol;
      const totalBombaEtanol = parseFloat(this.totalBombaEtanol.toFixed(2));
      if (totalBombaEtanol < abastecimentoEtanol) {
        totalBombaEtanol;
        console.log(
          `A quantidade de combustivel de: ${totalBombaEtanol.toFixed(
            2
          )} litros na bomba, \n é insuficiente para abastecimento`
        );
        return;
      } else {
        this.quantidadeCombustivel = parseFloat(abastecimentoEtanol.toFixed(2));
        this.totalBombaEtanol -= abastecimentoEtanol;
        this.totalBombaEtanol = parseFloat(this.totalBombaEtanol.toFixed(2));
        console.log(
          `Abastecimento de etanol de: ${abastecimentoEtanol.toFixed(
            2
          )} litros. Total a pagar: R$ ${valor.toFixed(2)}`
        );
        return abastecimentoEtanol;
      }
    }
  }

  abastecerPorLitro(quantidadeCombustivel: number, tipoCombustivel: TypeFuel) {
    if (tipoCombustivel.tipo? "gasolina" : PriceFuel.gasolina) {
      const totalBombaGasolina = parseFloat(this.totalBombaGasolina.toFixed(2));
      if (quantidadeCombustivel > totalBombaGasolina) {
        totalBombaGasolina;
        console.log(
          `A quantidade de combustivel de: ${totalBombaGasolina.toFixed(
            2
          )}litros na bomba, \n é insuficiente para abastecimento`
        );
        return;
      } else {
        const abastecimentoGasolina =
          quantidadeCombustivel * PriceFuel.gasolina;
        this.totalBombaGasolina = parseFloat(
          this.totalBombaGasolina.toFixed(2)
        );
        this.totalBombaGasolina -= quantidadeCombustivel;
        this.quantidadeCombustivel = parseFloat(
          quantidadeCombustivel.toFixed(2)
        );
        console.log(
          `Abastecimento de gasolina de: ${quantidadeCombustivel.toFixed(
            2
          )} litros. Total a pagar: R$ ${abastecimentoGasolina.toFixed(
            2
          )} reais`
        );
        return abastecimentoGasolina;
      }
    }
    if (tipoCombustivel.tipo? "gasolina" : PriceFuel.gasolina) {
      const totalBombaEtanol = parseFloat(this.totalBombaEtanol.toFixed(2));
      if (totalBombaEtanol < quantidadeCombustivel) {
        console.log(
          `A quantidade de combustível de: ${totalBombaEtanol.toFixed(
            2
          )}litros na bomba,\n é insifuciente para abastecimento`
        );
        return;
      } else {
        const abastecimentoEtanol = quantidadeCombustivel * PriceFuel.etanol;
        this.totalBombaEtanol = parseFloat(this.totalBombaEtanol.toFixed(2));
        this.quantidadeCombustivel = parseFloat(
          quantidadeCombustivel.toFixed(2)
        );
        this.totalBombaEtanol -= quantidadeCombustivel;

        console.log(
          `Abastecimento de etanol de: ${quantidadeCombustivel.toFixed(
            2
          )} litros. Total a pagar: R$ ${abastecimentoEtanol.toFixed(2)} reais`
        );
        return abastecimentoEtanol;
      }
    }
  }

  alterarValor(novoValor: number) {
    this.valorLitro = parseFloat(novoValor.toFixed(2));
    return console.log(`O valor do litro foi alterado para: R$ ${novoValor.toFixed(2)} reais`)
  }

  alterarCombustivel(novoCombustivel: TypeFuel) {
    this.tipoCombustivel = novoCombustivel;
    if (novoCombustivel.tipo === "gasolina") {
      this.valorLitro = PriceFuel.gasolina;
    } else {
      this.valorLitro = PriceFuel.etanol;
    }
  }

  alterarQuantidadeCombustivel(
    novaQtdCombustivelBomba: number,
    tipoCombustivel: TypeFuel
  ) {
    if (tipoCombustivel.tipo === "gasolina") {
      this.totalBombaGasolina = novaQtdCombustivelBomba;
      return console.log(`A quantidade de combustível da bomba foi alterada para: ${novaQtdCombustivelBomba} litros`)
    } else {
      this.totalBombaEtanol = novaQtdCombustivelBomba;
      return console.log(`A quantidade de combustível da bomba foi alterada para: ${novaQtdCombustivelBomba} litros`)
    }
  }
}

export default FuelPump;
