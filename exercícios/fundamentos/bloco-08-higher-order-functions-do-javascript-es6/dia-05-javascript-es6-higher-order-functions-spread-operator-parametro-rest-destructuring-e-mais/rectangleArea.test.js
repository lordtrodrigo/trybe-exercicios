const { operation, rectangleArea, rectangle1, rectangle2, rectangle3, rectangles } = require('./rectangleArea.js');

describe('Testes para a função rectangleArea()', () => {
    it('Verifica se quando a função rectangleArea() recebe a largura e a altura de um triângulo, imprime a área.', () => {
        expect(operation([1, 2])).toBe(2);
        expect(operation([3, 5])).toBe(15);
        expect(operation([6, 9])).toBe(54);
    });
});