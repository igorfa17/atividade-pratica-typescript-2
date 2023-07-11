export class ContaCorrente {
    private numeroConta: string;
    private nomeCorrentista: string;
    private saldo: number;
  
    constructor(numeroConta: string, nomeCorrentista: string, saldo: number = 0) {
      this.numeroConta = numeroConta;
      this.nomeCorrentista = nomeCorrentista;
      this.saldo = saldo;
    }
  
    alterarNome(novoNome: string): void {
      this.nomeCorrentista = novoNome;
    }
  
    deposito(valor: number): void {
      this.saldo += valor;
    }
  
    saque(valor: number): void {
      if (valor > this.saldo) {
        console.log("Saldo insuficiente.");
      } else {
        this.saldo -= valor;
      }
    }
  }
  