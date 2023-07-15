class ContaCorrente {
    numeroDaConta: number;
    nomeDoCorrentista: string;
    saldo: number;
  
    constructor(numeroDaConta: number, nomeDoCorrentista: string, saldo?: number) {
      this.numeroDaConta = numeroDaConta;
      this.nomeDoCorrentista = nomeDoCorrentista;
      this.saldo = 0;
    }
  
    alterarNome(nomeDoCorrentista: string) {
      this.nomeDoCorrentista = nomeDoCorrentista;
      console.log(`Nome do correntista alterado com sucesso!`)
    }
  
    deposito(valorDeposito: number) {
      this.saldo = this.saldo + valorDeposito;
      console.log(`Deposito de: R$ ${valorDeposito.toFixed(2)} reais efetuado com sucesso`)
    }
  
    saque(valorSaque: number) {
      if (valorSaque > this.saldo) {
        return console.error(
          "O valor de saque é maior do que seu saldo! Por favor revise os valores"
        );
      } else {
        this.saldo = this.saldo - valorSaque;
        console.log(`Saque de: R$ ${valorSaque.toFixed(2)} reais efetuado com sucesso`)
      }
    }

    mostrarSaldo(){
       console.log(`O seu saldo atual é de R$ ${this.saldo.toFixed(2)} reais`); 
    }
  }
  
  export default ContaCorrente;