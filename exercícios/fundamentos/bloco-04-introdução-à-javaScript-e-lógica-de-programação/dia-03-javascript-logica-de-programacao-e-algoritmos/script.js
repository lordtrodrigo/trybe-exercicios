let fruits = [3, 4, 5, 1, 2];

let soma = 0;

for (let index = 0; index < fruits.length; index += 1) {
    soma += fruits[index];
}

if (soma > 15) {
    console.log(soma);
} else {
    console.log("Resultado menor que 16.");
}