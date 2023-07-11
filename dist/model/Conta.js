"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = void 0;
class ContaCorrente {
    constructor(numeroConta, nomeCorrentista, saldo = 0) {
        this.numeroConta = numeroConta;
        this.nomeCorrentista = nomeCorrentista;
        this.saldo = saldo;
    }
    alterarNome(novoNome) {
        this.nomeCorrentista = novoNome;
    }
    deposito(valor) {
        this.saldo += valor;
    }
    saque(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente.");
        }
        else {
            this.saldo -= valor;
        }
    }
}
exports.ContaCorrente = ContaCorrente;
