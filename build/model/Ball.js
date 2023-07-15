"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PI = Math.PI;
class Ball {
    constructor() {
        const r = 5;
        this.cor = "azul";
        this.raio = r;
        this.circunferência = 2 * PI * r;
        this.diametro = 2 * r;
        this.material = 'couro';
    }
    changeColor(newColor) {
        if (this.circunferência > 15) {
            this.cor = newColor;
        }
    }
    changeRadios(newRadios) {
        this.raio = newRadios;
        this.diametro = newRadios * 2;
        this.circunferência = 2 * PI * newRadios;
    }
    showColor() {
        return this.cor;
    }
}
exports.default = Ball;
