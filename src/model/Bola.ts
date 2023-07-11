export class Bola {
    private cor: string;
    private circunferencia: number;
    private material: string;
  
    constructor(cor: string, circunferencia: number, material: string) {
      this.cor = cor;
      this.circunferencia = circunferencia;
      this.material = material;
    }
  
    trocarCor(novaCor: string): void {
      this.cor = novaCor;
    }
  
    mostrarCor(): string {
      return this.cor;
    }
  }

