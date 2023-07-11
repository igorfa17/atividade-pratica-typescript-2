"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    constructor(consumoCombustivel) {
        this.consumoCombustivel = consumoCombustivel;
        this.nivelCombustivel = 0;
    }
    andar(distancia) {
        const combustivelNecessario = distancia / this.consumoCombustivel;
        if (combustivelNecessario > this.nivelCombustivel) {
            console.log("Combustível insuficiente para percorrer a distância desejada.");
        }
        else {
            this.nivelCombustivel -= combustivelNecessario;
            console.log(`Carro percorreu ${distancia} km.`);
        }
    }
    obterGasolina() {
        return this.nivelCombustivel;
    }
    adicionarGasolina(quantidade) {
        this.nivelCombustivel += quantidade;
        console.log(`Abastecido com ${quantidade} litros de gasolina.`);
    }
}
exports.Carro = Carro;
