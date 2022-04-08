// 01 CALCULADORA DE FATORIAL

let numero = 10;

let fatorial = numero;

for (index = numero - 1; index > 0; index -= 1) {
    fatorial = fatorial * index;
}

console.log(fatorial);