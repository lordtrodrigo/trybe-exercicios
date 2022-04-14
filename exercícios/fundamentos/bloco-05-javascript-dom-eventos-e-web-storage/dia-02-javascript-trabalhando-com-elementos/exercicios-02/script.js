// 'Exercício 5.2 - JavaScript DOM'

// 01 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

let body = document.getElementsByTagName('body');

let headline = document.createElement('h1');

document.body.appendChild(headline).innerText = 'Exercício 5.2 - JavaScript DOM';


// 02 - Adicione a tag main com a classe main-content como filho da tag body;

let main = document.createElement('main'); 

document.body.appendChild(main).className = 'main-content';


// 03 - Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let section = document.createElement('section');

main.appendChild(section).className = 'center-content';


// 04 - Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let paragraph = document.createElement('p');

section.appendChild(paragraph).innerText = 'João e o pé de feijão.'

// 05 - Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let section2 = document.createElement('section');

main.appendChild(section2).className = 'left-content';

// 06 - Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let section3 = document.createElement('section');

main.appendChild(section3).className = 'right-content';

// 07 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
let image = document.createElement('img');

image.src = 'https://picsum.photos/200';

section2.appendChild(image).className = 'small-image';

// 08 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let unorderedList = document.createElement('ul');

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

section3.appendChild(unorderedList);

for (let item of list) {
    let listItem = document.createElement('li');
    listItem.innerText = item;
    unorderedList.appendChild(listItem);
}


// 09 - Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
function subtitles(units) {
    let subtitle = document.createElement('h3');
    // main.appendChild(subtitle);
    for (index = 1; index <= units; index +=1) {
        main.appendChild(subtitle);
    }
}

subtitles(3)

// let subtitle1 = document.createElement('h3');
// let subtitle2 = document.createElement('h3');
// let subtitle3 = document.createElement('h3');

// main.appendChild(subtitle1);
// main.appendChild(subtitle2);
// main.appendChild(subtitle3);