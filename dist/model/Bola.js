"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bola = void 0;
class Bola {
    constructor(cor, circunferencia, material) {
        this.cor = cor;
        this.circunferencia = circunferencia;
        this.material = material;
    }
    trocarCor(novaCor) {
        this.cor = novaCor;
    }
    mostrarCor() {
        return this.cor;
    }
}
exports.Bola = Bola;
