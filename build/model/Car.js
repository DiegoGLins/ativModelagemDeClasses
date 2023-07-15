"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(consumo) {
        this.consumo = consumo;
        this.combustivel = 0;
    }
    andar(distancia) {
        const consumoCombustivel = distancia / this.consumo;
        if (consumoCombustivel <= this.combustivel) {
            this.combustivel -= consumoCombustivel;
            console.log(`O veículo percorreu ${distancia} km.`);
        }
        else {
            console.log("Não há combustível suficiente para percorrer a distância especificada.");
        }
    }
    obterGasolina() {
        return this.combustivel;
    }
    adicionarGasolina(quantidade) {
        this.combustivel += quantidade;
        console.log(`O tanque foi abastecido com ${quantidade} litros de combustível.`);
    }
}
exports.Car = Car;
