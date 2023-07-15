import { Car } from "./model/Car";

const carro1 = new Car(10); 
carro1.adicionarGasolina(50); 
carro1.andar(200); 
console.log(`Nível de combustível: ${carro1.obterGasolina()} litros.`);

console.log(carro1)