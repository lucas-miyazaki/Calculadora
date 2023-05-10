class Display {
    constructor(displayValorAnterior, displayvalorAtual) {
        this.displayvalorAtual = displayvalorAtual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacao = undefined;
        this.valorAtual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '/',
            multiplicar: 'x',
            subtrair: '-',
        }
    }

    borrar() {
        this.valorAtual = this.valorAtual.toString().slice(0, -1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorAtual = '';
        this.valorAnterior = '';
        this.tipoOperacao = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        this.tipoOperacao !== 'igual' && this.calcular();
        this.tipoOperacao = tipo;
        this.valorAnterior = this.valorAtual || this.valorAnterior;
        this.valorAtual = '';
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if (numero === '.' && this.valorAtual.includes('.')) return
        this.valorAtual = this.valorAtual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayvalorAtual.textContent = this.valorAtual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacao] || ''}`;
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorAtual = parseFloat(this.valorAtual);

        if (isNaN(valorAtual) || isNaN(valorAnterior)) return
        this.valorAtual = this.calculador[this.tipoOperacao](valorAnterior, valorAtual);
    }
}