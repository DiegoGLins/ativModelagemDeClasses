const PI = Math.PI;

class Ball {
  raio:number;
  diametro:number;  
  cor: string;
  circunferência: number;
  material: string;

  constructor() {
    const r = 5;
    this.cor = "azul";
    this.raio = r;
    this.circunferência = 2*PI*r;
    this.diametro = 2*r;
    this.material = 'couro';
  }

  changeColor(newColor: string){
    if(this.circunferência > 15){
        this.cor = newColor;
    }
  }

  changeRadios(newRadios: number){
    this.raio = newRadios;
    this.diametro = newRadios*2;
    this.circunferência = 2*PI*newRadios;
  }

  showColor(){
    return this.cor
  } 
}

export default Ball;