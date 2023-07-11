export class BombaCombustivel {
    private tipoCombustivel: string;
    private valorLitro: number;
    private quantidadeCombustivel: number;
  
    constructor(tipoCombustivel: string, valorLitro: number, quantidadeCombustivel: number) {
      this.tipoCombustivel = tipoCombustivel;
      this.valorLitro = valorLitro;
      this.quantidadeCombustivel = quantidadeCombustivel;
    }
  
    abastecerPorValor(valor: number): void {
      const quantidadeLitros = valor / this.valorLitro;
      if (quantidadeLitros > this.quantidadeCombustivel) {
        console.log("Quantidade de combustível insuficiente na bomba.");
      } else {
        this.quantidadeCombustivel -= quantidadeLitros;
        console.log(`Abastecimento concluído. Foram colocados ${quantidadeLitros} litros no veículo.`);
      }
    }
  
    abastecerPorLitro(quantidadeLitros: number): void {
      const valorPagar = quantidadeLitros * this.valorLitro;
      if (quantidadeLitros > this.quantidadeCombustivel) {
        console.log("Quantidade de combustível insuficiente na bomba.");
      } else {
        this.quantidadeCombustivel -= quantidadeLitros;
        console.log(`Abastecimento concluído. Valor a ser pago pelo cliente: R$ ${valorPagar.toFixed(2)}.`);
      }
    }
  
    alterarValor(novoValorLitro: number): void {
      this.valorLitro = novoValorLitro;
    }
  
    alterarCombustivel(novoTipoCombustivel: string): void {
      this.tipoCombustivel = novoTipoCombustivel;
    }
  
    alterarQuantidadeCombustivel(novaQuantidadeCombustivel: number): void {
      this.quantidadeCombustivel = novaQuantidadeCombustivel;
    }
  }
  