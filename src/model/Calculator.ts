class Calculator {
    history: number[];
  
    constructor() {
      this.history = [];
    }
  
    add(valor1: number, valor2: number) {
      const resultAdd = valor1 + valor2;
      this.history.push(resultAdd);
      console.log(`A soma dos valores: ${valor1} + ${valor2} é = ${resultAdd}`)
    }
  
    subtract(valor1: number, valor2: number) {
      const resultSubtract = valor1 - valor2;
      this.history.push(resultSubtract);
      console.log(`A subtracao dos valores: ${valor1} - ${valor2} é = ${resultSubtract}`)
    }
  
    multiply(valor1: number, valor2: number) {
      const resultMultiply = valor1 * valor2;
      this.history.push(resultMultiply);
      console.log(`A multiplicacao dos valores: ${valor1} x ${valor2} é = ${resultMultiply}`)
    }
  
    toDivid(valor1: number, valor2: number) {
      const resultDivid = valor1 / valor2;
      this.history.push(resultDivid);
      console.log(`A divisao dos valores: ${valor1} : ${valor2} é = ${resultDivid}`)
    }
  
    showHistory(){
      console.log(this.history)
    }
  }
  
  export default Calculator;
  