
//Contador

const contador = new Contador();

console.log(contador.retornarValor()); // Saída: 0

contador.incrementar();
contador.incrementar();

console.log(contador.retornarValor()); // Saída: 2

contador.zerar();

console.log(contador.retornarValor()); // Saída: 0

//Bola

const minhaBola = new Bola("vermelha", 10, "couro");

console.log(minhaBola.mostrarCor()); // Saída: vermelha

minhaBola.trocarCor("azul");

console.log(minhaBola.mostrarCor()); // Saída: azul

//Conta Corrente

const minhaConta = new ContaCorrente("123456", "Fulano");

console.log(minhaConta); // Saída: ContaCorrente { numeroConta: '123456', nomeCorrentista: 'Fulano', saldo: 0 }

minhaConta.deposito(100);
console.log(minhaConta); // Saída: ContaCorrente { numeroConta: '123456', nomeCorrentista: 'Fulano', saldo: 100 }

minhaConta.saque(50);
console.log(minhaConta); // Saída: ContaCorrente { numeroConta: '123456', nomeCorrentista: 'Fulano', saldo: 50 }

minhaConta.alterarNome("Ciclano");
console.log(minhaConta); // Saída: ContaCorrente { numeroConta: '123456', nomeCorrentista: 'Ciclano', saldo: 50 }

minhaConta.saque(100); // Saída: Saldo insuficiente.

//Calculadora

const calculadora = new Calculadora();

calculadora.somar(2, 3);
calculadora.multiplicar(4, 5);
calculadora.dividir(10, 2);
calculadora.subtrair(8, 3);

calculadora.visualizarHistorico();


//Bomba de Combustível

const bomba = new BombaCombustivel("Gasolina", 5.5, 1000);

bomba.abastecerPorValor(50);
// Saída: Abastecimento concluído. Foram colocados 9.090909090909092 litros no veículo.

bomba.abastecerPorLitro(30);
// Saída: Abastecimento concluído. Valor a ser pago pelo cliente: R$ 165.00.

bomba.alterarValor(6.0);
bomba.alterarCombustivel("Etanol");
bomba.alterarQuantidadeCombustivel(800);

bomba.abastecerPorLitro(40);
// Saída: Quantidade de combustível insuficiente na bomba.

bomba.abastecerPorValor(100);
// Saída: Abastecimento concluído. Foram colocados 16.666666666666668 litros no veículo.


//Carro

const meuFusca = new Carro(15);

meuFusca.adicionarGasolina(20);
// Saída: Abastecido com 20 litros de gasolina.

meuFusca.andar(100);
// Saída: Carro percorreu 100 km.

console.log(meuFusca.obterGasolina());
// Saída: 19

meuFusca.andar(200);
// Saída: Combustível insuficiente para percorrer a distância desejada.
