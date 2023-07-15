// 2. Crie uma classe que modele uma bola:
// a. Atributos
// i. Cor
// ii. Circunferência
// iii. Material
// b. Métodos
// i. Trocar Cor
// ii. Mostrar cor

import Ball from "./model/Ball";


const bola1 = new Ball()

bola1.changeColor("vermelho")
bola1.showColor()
bola1.changeRadios(30)

console.log(bola1)

