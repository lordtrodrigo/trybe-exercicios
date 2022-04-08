// 1 - RETORNA A MAIOR PALAVRA DO ARRAY

let array = ['java', 'javascript', 'python', 'html', 'css'];

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

let currentWordSize = 0;

let comparateWordSize = 0;

let checkNotLow = 0;

let biggestString = '';

let values = [];

let highestValue = 0;

for (index = 0; index < array.length; index += 1) {
    currentWordSize = array[index].length;
    for (index2 = 0; index2 < array.length; index2 += 1) {
        comparateWordSize = array[index2].length;
        if (currentWordSize >= comparateWordSize) {
            checkNotLow += 1;
        }
        values.push(checkNotLow);
    }
}

for (index3 = 0; index3 < values.length; index3 += 1) {
    let currentNumber = values[index3];
    for (index4 = 0; index4 < values.length; index4 += 1){
        if (currentNumber > values[index4]){
            highestValue += 1;
        }
    }
    if (highestValue > (array.lenght - 1)) {
        biggestString.push(array[values[index3]])
        break;
    } else {
        highestValue = 0;
    }
}

console.log(biggestString);

