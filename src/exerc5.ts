// 5 - Faça um programa completo utilizando classes e métodos que:
// a. Possua uma classe chamada BombaCombustivel, com no
// mínimo esses atributos:
// i. tipoCombustivel.
// ii. valorLitro
// iii. quantidadeCombustivel
// b. Possua no mínimo esses métodos:
// i. abastecerPorValor() – método onde é informado o
// valor a ser abastecido e mostra a quantidade de litros
// que foi colocada no veículo
// ii. abastecerPorLitro() – método onde é informado a
// quantidade em litros de combustível e mostra o valor a
// ser pago pelo cliente.
// iii. alterarValor() – altera o valor do litro do combustível.
// iv. alterarCombustivel() – altera o tipo do combustível.
// v. alterarQuantidadeCombustivel() – altera a
// quantidade de combustível restante na bomba.

import FuelPump from "./model/FuelPump";

const abastecimento1 = new FuelPump({tipo: "gasolina"}, 4.89)
const abastecimento2 = new FuelPump({tipo: "etanol"}, 3.57)
const abastecimento3 = new FuelPump({tipo: "etanol"}, 3.57)
const abastecimento4 = new FuelPump({tipo: "gasolina"}, 4.89)


abastecimento2.alterarQuantidadeCombustivel(20, {tipo: "gasolina"})
console.log(abastecimento2)

abastecimento3.alterarQuantidadeCombustivel(20,{tipo: "etanol"})
console.log(abastecimento3)

abastecimento1.abastecerPorLitro(60,{tipo: "gasolina"})
console.log(abastecimento1);

abastecimento2.abastecerPorLitro(60,{tipo: "etanol"});
console.log(abastecimento2)

abastecimento3.abastecerPorValor(120,{tipo: "etanol"})
console.log(abastecimento3)

abastecimento4.abastecerPorValor(110,{tipo: "gasolina"})
console.log(abastecimento4)


abastecimento1.alterarValor(4);
console.log(abastecimento1)

abastecimento4.alterarCombustivel({tipo: "etanol"})
console.log(abastecimento4)








