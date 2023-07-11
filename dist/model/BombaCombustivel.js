"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BombaCombustivel = void 0;
class BombaCombustivel {
    constructor(tipoCombustivel, valorLitro, quantidadeCombustivel) {
        this.tipoCombustivel = tipoCombustivel;
        this.valorLitro = valorLitro;
        this.quantidadeCombustivel = quantidadeCombustivel;
    }
    abastecerPorValor(valor) {
        const quantidadeLitros = valor / this.valorLitro;
        if (quantidadeLitros > this.quantidadeCombustivel) {
            console.log("Quantidade de combustível insuficiente na bomba.");
        }
        else {
            this.quantidadeCombustivel -= quantidadeLitros;
            console.log(`Abastecimento concluído. Foram colocados ${quantidadeLitros} litros no veículo.`);
        }
    }
    abastecerPorLitro(quantidadeLitros) {
        const valorPagar = quantidadeLitros * this.valorLitro;
        if (quantidadeLitros > this.quantidadeCombustivel) {
            console.log("Quantidade de combustível insuficiente na bomba.");
        }
        else {
            this.quantidadeCombustivel -= quantidadeLitros;
            console.log(`Abastecimento concluído. Valor a ser pago pelo cliente: R$ ${valorPagar.toFixed(2)}.`);
        }
    }
    alterarValor(novoValorLitro) {
        this.valorLitro = novoValorLitro;
    }
    alterarCombustivel(novoTipoCombustivel) {
        this.tipoCombustivel = novoTipoCombustivel;
    }
    alterarQuantidadeCombustivel(novaQuantidadeCombustivel) {
        this.quantidadeCombustivel = novaQuantidadeCombustivel;
    }
}
exports.BombaCombustivel = BombaCombustivel;
