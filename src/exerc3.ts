// 3. Crie uma classe para implementar uma conta corrente. A classe
// deve possuir os seguintes atributos:
// a. Número da conta
// b. Nome do correntista
// c. Saldo
// Os métodos são os seguintes:
// a) Alterar nome
// b) Deposito
// c) Saque
// No construtor, o saldo é opcional, com valor padrão zero e os
// demais atributos são obrigatórios. A conta não pode ficar com saldo
// negativo.

import Account from "./model/Account";

const account1 = new Account(45663, "Otavio Henrique");

account1.deposito(4000);
account1.saque(500);
account1.mostrarSaldo();
account1.alterarNome("Isaque Newton");
console.log(account1);
