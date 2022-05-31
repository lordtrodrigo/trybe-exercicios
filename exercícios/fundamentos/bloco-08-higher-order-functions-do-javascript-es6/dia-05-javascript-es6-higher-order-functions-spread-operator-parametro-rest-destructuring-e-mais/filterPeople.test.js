const { filterPeople, people } = require('./filterPeople.js');

describe('Testes para a função filterPeople', () => {
    it('Verifica se a função filterPeople, recebendo uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20', () => {
        expect(filterPeople(people)).toEqual([{
            name: 'Nicole',
            bornIn: 1992,
            nationality: 'Australian',
        },
        {
            name: 'Toby',
            bornIn: 1901,
            nationality: 'Australian',
        }]);
    });
});