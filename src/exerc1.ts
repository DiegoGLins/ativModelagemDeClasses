import {Counter} from './model/Counter'


const counter1 = new Counter()

counter1.incrementar(10)
counter1.mostrarContador()
counter1.decrementar(5);
counter1.mostrarContador()
counter1.incrementar(22)
counter1.mostrarContador()
counter1.zerarContador()