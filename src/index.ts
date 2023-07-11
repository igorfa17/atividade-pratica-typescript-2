
const contador = new Contador();

console.log(contador.retornarValor()); // Saída: 0

contador.incrementar();
contador.incrementar();

console.log(contador.retornarValor()); // Saída: 2

contador.zerar();

console.log(contador.retornarValor()); // Saída: 0
