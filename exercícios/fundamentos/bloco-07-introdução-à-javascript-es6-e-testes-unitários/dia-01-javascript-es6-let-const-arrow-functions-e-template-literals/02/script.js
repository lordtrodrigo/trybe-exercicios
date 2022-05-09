// 01 🚀  Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
//      - Modifique a estrutura da função para que ela seja uma arrow function.
//      - Modifique as concatenações para template literals.

let ifScope = 'Não devo ser utilizada fora do meu escopo (if),';
const elseScope = 'Não devo ser utilizada fora meu escopo (else)';

const testingScope = (escopo) => (escopo === true) ? console.log(`${ifScope} ótimo, fui utilizada no escopo!`) : console.log(`${elseScope}, o que estou fazendo aqui ? :O`);
// if (escopo === true) {
//   ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//   console.log(ifScope);
// } else {
//   console.log(elseScope);
// }
// console.log(ifScope + ' o que estou fazendo aqui ? :O'); 

testingScope(true);
testingScope(false);


// 02 🚀  Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
//      - Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
//      - Bônus (opcional): tente fazer o mesmo exercício utilizando o métodoarray.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

function compareNumbers (a, b) {
    return a - b;
}

// console.log(oddsAndEvens.sort(compareNumbers));

console.log(`Os números ${oddsAndEvens.sort(compareNumbers)} se encontram ordenados de forma crescente!`);
