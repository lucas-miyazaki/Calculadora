const displayValorAnterior = document.getElementById('valor-anterior');
const displayvalorAtual = document.getElementById('valor-atual');
const botoesNumeros = document.querySelectorAll('.numero');
const botoesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayvalorAtual);

botoesNumeros.forEach(botao => {
    botao.addEventListener('click', () => display.agregarNumero(botao.innerHTML));
});

botoesOperadores.forEach(botao => {
    botao.addEventListener('click', () => display.computar(botao.value))
});