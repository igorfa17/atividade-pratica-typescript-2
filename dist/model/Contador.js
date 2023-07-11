"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contador = void 0;
class Contador {
    constructor() {
        this.valor = 0;
    }
    zerar() {
        this.valor = 0;
    }
    incrementar() {
        this.valor++;
    }
    retornarValor() {
        return this.valor;
    }
}
exports.Contador = Contador;
