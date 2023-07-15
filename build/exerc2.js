"use strict";
// 2. Crie uma classe que modele uma bola:
// a. Atributos
// i. Cor
// ii. Circunferência
// iii. Material
// b. Métodos
// i. Trocar Cor
// ii. Mostrar cor
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ball_1 = __importDefault(require("./model/Ball"));
const bola1 = new Ball_1.default();
bola1.changeColor("vermelho");
bola1.showColor();
bola1.changeRadios(30);
console.log(bola1);
