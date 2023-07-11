"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
class Calculadora {
    constructor() {
        this.historico = [];
    }
    somar(a, b) {
        const resultado = a + b;
        this.historico.push(`${a} + ${b} = ${resultado}`);
        return resultado;
    }
    multiplicar(a, b) {
        const resultado = a * b;
        this.historico.push(`${a} * ${b} = ${resultado}`);
        return resultado;
    }
    dividir(a, b) {
        if (b === 0) {
            console.log("Erro: Divisão por zero.");
            return NaN;
        }
        const resultado = a / b;
        this.historico.push(`${a} / ${b} = ${resultado}`);
        return resultado;
    }
    subtrair(a, b) {
        const resultado = a - b;
        this.historico.push(`${a} - ${b} = ${resultado}`);
        return resultado;
    }
    visualizarHistorico() {
        console.log(this.historico);
    }
}
exports.Calculadora = Calculadora;
