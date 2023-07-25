"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PriceFuel;
(function (PriceFuel) {
    PriceFuel[PriceFuel["gasolina"] = 4.89] = "gasolina";
    PriceFuel[PriceFuel["etanol"] = 3.57] = "etanol";
})(PriceFuel || (PriceFuel = {}));
class FuelPump {
    constructor(tipoCombustivel, valorLitro) {
        this.tipoCombustivel = tipoCombustivel;
        this.valorLitro = valorLitro;
        this.tipoCombustivel = tipoCombustivel;
        this.valorLitro = valorLitro;
        this.quantidadeCombustivel = 0;
        this.totalBombaGasolina = 300;
        this.totalBombaEtanol = 300;
    }
    abastecerPorValor(valor, tipoCombustivel) {
        if (tipoCombustivel.tipo === "gasolina") {
            const abastecimentoGasolina = valor / PriceFuel.gasolina;
            const totalBombaGasolina = parseFloat(this.totalBombaGasolina.toFixed(2));
            if (totalBombaGasolina < abastecimentoGasolina) {
                totalBombaGasolina;
                console.log(`A quantidade de combustivel de: ${totalBombaGasolina.toFixed(2)} litros na bomba, \n é insuficiente para abastecimento`);
                return;
            }
            else {
                this.quantidadeCombustivel = parseFloat(abastecimentoGasolina.toFixed(2));
                this.totalBombaGasolina =
                    totalBombaGasolina - this.quantidadeCombustivel;
                console.log(`Abastecimento de gasolina de: ${abastecimentoGasolina.toFixed(2)} litros. Total a pagar: R$ ${valor.toFixed(2)} reais`);
            }
            return abastecimentoGasolina;
        }
        if (tipoCombustivel.tipo === "etanol") {
            const abastecimentoEtanol = valor / PriceFuel.etanol;
            const totalBombaEtanol = parseFloat(this.totalBombaEtanol.toFixed(2));
            if (totalBombaEtanol < abastecimentoEtanol) {
                totalBombaEtanol;
                console.log(`A quantidade de combustivel de: ${totalBombaEtanol.toFixed(2)} litros na bomba, \n é insuficiente para abastecimento`);
                return;
            }
            else {
                this.quantidadeCombustivel = parseFloat(abastecimentoEtanol.toFixed(2));
                this.totalBombaEtanol -= abastecimentoEtanol;
                this.totalBombaEtanol = parseFloat(this.totalBombaEtanol.toFixed(2));
                console.log(`Abastecimento de etanol de: ${abastecimentoEtanol.toFixed(2)} litros. Total a pagar: R$ ${valor.toFixed(2)}`);
                return abastecimentoEtanol;
            }
        }
    }
    abastecerPorLitro(quantidadeCombustivel, tipoCombustivel) {
        if (tipoCombustivel.tipo === "gasolina") {
            const totalBombaGasolina = parseFloat(this.totalBombaGasolina.toFixed(2));
            if (quantidadeCombustivel > totalBombaGasolina) {
                totalBombaGasolina;
                console.log(`A quantidade de combustivel de: ${totalBombaGasolina.toFixed(2)}litros na bomba, \n é insuficiente para abastecimento`);
                return;
            }
            else {
                const abastecimentoGasolina = quantidadeCombustivel * PriceFuel.gasolina;
                this.totalBombaGasolina = parseFloat(this.totalBombaGasolina.toFixed(2));
                this.totalBombaGasolina -= quantidadeCombustivel;
                this.quantidadeCombustivel = parseFloat(quantidadeCombustivel.toFixed(2));
                console.log(`Abastecimento de gasolina de: ${quantidadeCombustivel.toFixed(2)} litros. Total a pagar: R$ ${abastecimentoGasolina.toFixed(2)} reais`);
                return abastecimentoGasolina;
            }
        }
        if (tipoCombustivel.tipo === "etanol") {
            const totalBombaEtanol = parseFloat(this.totalBombaEtanol.toFixed(2));
            if (totalBombaEtanol < quantidadeCombustivel) {
                console.log(`A quantidade de combustível de: ${totalBombaEtanol.toFixed(2)}litros na bomba,\n é insifuciente para abastecimento`);
                return;
            }
            else {
                const abastecimentoEtanol = quantidadeCombustivel * PriceFuel.etanol;
                this.totalBombaEtanol = parseFloat(this.totalBombaEtanol.toFixed(2));
                this.quantidadeCombustivel = parseFloat(quantidadeCombustivel.toFixed(2));
                this.totalBombaEtanol -= quantidadeCombustivel;
                console.log(`Abastecimento de etanol de: ${quantidadeCombustivel.toFixed(2)} litros. Total a pagar: R$ ${abastecimentoEtanol.toFixed(2)} reais`);
                return abastecimentoEtanol;
            }
        }
    }
    alterarValor(novoValor) {
        this.valorLitro = novoValor;
    }
    alterarCombustivel(novoCombustivel) {
        this.tipoCombustivel = novoCombustivel;
        if (novoCombustivel.tipo === "gasolina") {
            this.valorLitro = PriceFuel.gasolina;
        }
        else {
            this.valorLitro = PriceFuel.etanol;
        }
    }
    alterarQuantidadeCombustivel(novaQtdCombustivelBomba, tipoCombustivel) {
        if (tipoCombustivel.tipo === "gasolina") {
            this.totalBombaGasolina = novaQtdCombustivelBomba;
            return;
        }
        else {
            this.totalBombaEtanol = novaQtdCombustivelBomba;
        }
    }
}
exports.default = FuelPump;
