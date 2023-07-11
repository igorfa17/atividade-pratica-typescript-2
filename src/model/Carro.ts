export class Carro {
    private consumoCombustivel: number;
    private nivelCombustivel: number;
  
    constructor(consumoCombustivel: number) {
      this.consumoCombustivel = consumoCombustivel;
      this.nivelCombustivel = 0;
    }
  
    andar(distancia: number): void {
      const combustivelNecessario = distancia / this.consumoCombustivel;
      if (combustivelNecessario > this.nivelCombustivel) {
        console.log("Combustível insuficiente para percorrer a distância desejada.");
      } else {
        this.nivelCombustivel -= combustivelNecessario;
        console.log(`Carro percorreu ${distancia} km.`);
      }
    }
  
    obterGasolina(): number {
      return this.nivelCombustivel;
    }
  
    adicionarGasolina(quantidade: number): void {
      this.nivelCombustivel += quantidade;
      console.log(`Abastecido com ${quantidade} litros de gasolina.`);
    }
  }
  