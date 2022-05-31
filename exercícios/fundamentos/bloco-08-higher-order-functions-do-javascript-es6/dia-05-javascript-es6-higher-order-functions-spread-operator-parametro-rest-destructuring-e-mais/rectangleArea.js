// 1 - Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2, 15 e 54.
// Dica: use spread operator.


const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

const rectangleArea = (width, height) => width * height;

const operation = (array) => rectangleArea(...array);

console.log(operation(rectangle1));

module.exports = { operation, rectangleArea, rectangle1, rectangle2, rectangle3, rectangles };
