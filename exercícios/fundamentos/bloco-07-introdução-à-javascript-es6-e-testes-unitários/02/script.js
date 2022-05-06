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