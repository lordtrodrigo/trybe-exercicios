let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// 01 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

console.log("-------EXERCÍCIO 01-------");
console.log(numbers);


// 02 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let soma1 = 0;

for (index = 0; index < numbers.length; index += 1) {
    soma1 += numbers[index];
}

console.log("-------EXERCÍCIO 02-------");
console.log(soma1);


// 03 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let soma2 = 0;

for (index = 0; index < numbers.length; index += 1) {
    soma2 += numbers[index];
}

let media1 = soma2 / numbers.length;

console.log("-------EXERCÍCIO 03-------");
console.log(media1);


// 04 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let soma3 = 0;

for (index = 0; index < numbers.length; index += 1) {
    soma3 += numbers[index];
}

let media2 = soma3 / numbers.length;

console.log("-------EXERCÍCIO 04-------");

if (media2 > 20) {
    console.log("Valor maior que 20.");
} else {
    console.log("Valor menor ou igual a 20.");
}


// 05 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let highestValue;
let checks = 0;
let base = (numbers.length) - 1;

for (index = 0; index < numbers.length; index += 1) {
    let currentNumber = numbers[index];

    for (index2 = 0; index2 < numbers.length; index2 += 1)
        if (currentNumber > numbers[index2]) {
        checks += 1;
    }

    if (checks === base) {
        highestValue = currentNumber;
        checks = 0;
    } else {
        checks = 0;
    }
}

console.log("-------EXERCÍCIO 05-------");
console.log(highestValue);


// 06 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impares = 0;

for (index = 0; index < numbers.length; index += 1) {
    currentNumber = numbers[index]
    if (currentNumber % 2 !== 0) {
        impares += 1;
    }
}

if (impares > 0) {
    console.log("Nesta lista há " + impares + " números ímpares.");
} else {
    console.log("Nenhum valor ímpar encontrado.");
}


// 07 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let lowerValue;
let checks = 0;
let base = (numbers.length) - 1;

for (index = 0; index < numbers.length; index += 1) {
    let currentNumber = numbers[index];

    for (index2 = 0; index2 < numbers.length; index2 += 1)
        if (currentNumber < numbers[index2]) {
        checks += 1;
    }

    if (checks === base) {
        lowerValue = currentNumber;
        checks = 0;
    } else {
        checks = 0;
    }
}

// console.log("-------EXERCÍCIO 07-------");
// console.log(lowerValue);


// 08 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];


// 09 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 

let numerosMetade = [];

for (index = 0; index < numeros.length; index += 1) {
    numerosMetade.push(numeros[index] / 2);
}

console.log(numerosMetade);