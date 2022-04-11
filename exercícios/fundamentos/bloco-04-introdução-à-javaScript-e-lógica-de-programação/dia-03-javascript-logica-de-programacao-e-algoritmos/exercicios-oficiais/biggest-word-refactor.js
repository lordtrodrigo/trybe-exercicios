// 1 - RETORNA A MAIOR PALAVRA DO ARRAY


// 0 criar uma variável para armazenar numeros de letras;
// 0 criar uma variável para armazenar numeros de check quando uma string não for menor que a outra;
// 0 criar uma variável para armazenar a string maior;
// 1 for que percorre o 'array';
// 2 contar quantas letras tem a palavra da vez;
// 3 armazenar o numero de palavras na variável;
// 4 for(dentro) que percorre o 'array';
// 5 contar novamente de um por um quantas letras cada string tem;
// 6 comparar os valores encontrados;
// 7 se o numero de letras armazenado na variável não for menor que a outra, adicionar mais um ao check;
// 8 ao final, adicionar valores encontrados de check num array vazio; 
// encontrar o maior numero do array antes vazio;
// pegar o indice do maior numero do array antes vazio e consolar o array[index do maior numero do array antes vazio] 



let array = ['java', 'javascript', 'python', 'html', 'css'];

let currentWordSize = 0;

let comparateWordSize = 0;

let checkNotLow = 0;

let biggestString = [];

let highestValue = 0;

let firstStringSize = array.length;


function lettersCount() {
    let values = [];
    for (let index = 0; index < array.length; index += 1) {
        currentWordSize = array[index].length;
        values.push(currentWordSize);
    }
    return values;
}

function biggestNumber() {
    let words = lettersCount();
    let errorMessage = 'Erro!'
    for (let index3 = 0; index3 < words.length; index3 += 1) {
        let currentNumber = words[index3];
        for (let index4 = 0; index4 < words.length; index4 += 1) {
            if (currentNumber >= words[index4]) {
                highestValue += 1;
            }
        }
        if (highestValue >= array.length) {
            return currentNumber;
        } else {
            highestValue = 0;
        }
    }
}

console.log(biggestNumber());




let indexValue = '';

for (let index3 = 0; index3 < values.length; index3 += 1) {
    let currentNumber = values[index3];

    for (let index4 = 0; index4 < values.length; index4 += 1) {
        if (currentNumber > values[index4]) {
            highestValue += 1;
        }
    }
    indexValue = array[index3];

    if (highestValue >= (firstStringSize - 1)) {
        biggestString.push(indexValue);
        break;
    } else {
        highestValue = 0;
    }
}

console.log(biggestString);

