// 4. Crie uma classe para representar uma Calculadora. Esta classe
// deve conter um atributo que servirá para armazenar o histórico das
// operações e seus respectivos resultados.
// a. Esta classe deve conter as operações de somar, multiplicar,
// dividir e diminuir.
// b. Esta classe deve iniciar com o histórico vazio
// c. Esta classe deve conter uma ação para visualizar o histórico.

import Calculator from "./model/Calculator";

const operation1 = new Calculator()

operation1.add(125,30)
operation1.multiply(20,140)
operation1.subtract(10,5)
operation1.toDivid(10,5)
operation1.showHistory()

console.log(operation1)