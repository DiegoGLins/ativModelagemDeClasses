"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = require("./model/Car");
const carro1 = new Car_1.Car(10);
carro1.adicionarGasolina(50);
carro1.andar(200);
console.log(`Nível de combustível: ${carro1.obterGasolina()} litros.`);
console.log(carro1);
