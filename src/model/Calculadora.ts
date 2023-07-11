class Calculadora {
    private historico: string[];
  
    constructor() {
      this.historico = [];
    }
  
    somar(a: number, b: number): number {
      const resultado = a + b;
      this.historico.push(`${a} + ${b} = ${resultado}`);
      return resultado;
    }
  
    multiplicar(a: number, b: number): number {
      const resultado = a * b;
      this.historico.push(`${a} * ${b} = ${resultado}`);
      return resultado;
    }
  
    dividir(a: number, b: number): number {
      if (b === 0) {
        console.log("Erro: Divisão por zero.");
        return NaN;
      }
      const resultado = a / b;
      this.historico.push(`${a} / ${b} = ${resultado}`);
      return resultado;
    }
  
    subtrair(a: number, b: number): number {
      const resultado = a - b;
      this.historico.push(`${a} - ${b} = ${resultado}`);
      return resultado;
    }
  
    visualizarHistorico(): void {
      console.log(this.historico);
    }
  }
  