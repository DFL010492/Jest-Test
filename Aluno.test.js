const Aluno = require('./Aluno');

describe('Testes da classe Aluno', () => {
    let aluno;

    beforeEach(() => {
        aluno = new Aluno('João', [8, 6]);
    });

    test('1. Testar se a média está sendo calculada corretamente', () => {
        expect(aluno.calcularMedia()).toBe(7);
    });

    test('2. Testar se a menção "MS" é retornada corretamente', () => {
        expect(aluno.obterMencao()).toBe('MS');
    });

    test('3. Testar se o aluno foi aprovad@', () => {
        expect(aluno.statusAprovacao()).toBe('aprovad@');
    });

    test('4. Testar para menção "SS"', () => {
        aluno = new Aluno('Maria', [9, 10]);
        expect(aluno.obterMencao()).toBe('SS');
    });

    test('5. Testar se o aluno foi aprovado com menção SS', () => {
        aluno = new Aluno('Carlos', [9, 9]);
        expect(aluno.statusAprovacao()).toBe('aprovad@');
    });

    test('6. Testar para menção "MM"', () => {
        aluno = new Aluno('Ana', [7, 5]);
        expect(aluno.obterMencao()).toBe('MM');
    });

    test('7. Testar se o aluno foi aprovado com menção MM', () => {
        aluno = new Aluno('Pedro', [6, 5]);
        expect(aluno.statusAprovacao()).toBe('aprovad@');
    });

    test('8. Testar para menção "MI"', () => {
        aluno = new Aluno('Lúcia', [4, 5]);
        expect(aluno.obterMencao()).toBe('MI');
    });

    test('9. Testar se o aluno foi reprovad@ com menção MI', () => {
        aluno = new Aluno('Roberto', [4, 5]);
        expect(aluno.statusAprovacao()).toBe('reprovad@');
    });

    test('10. Testar se a média de um array vazio retorna NaN', () => {
        aluno = new Aluno('Ingrid', []);
        expect(aluno.calcularMedia()).toBeNaN();
    });

    test('11. Testar se notas com valores decimais são calculadas corretamente', () => {
        aluno = new Aluno('Juliana', [8.5, 7.5]);
        expect(aluno.calcularMedia()).toBe(8);
    });

    test('12. Deve lançar erro se uma das notas for maior que 10', () => {
        const aluno = new Aluno('Erika', [11, 12]);
        expect(() => aluno.calcularMedia()).toThrow('Média acima da máxima permitida!');
    });
    

    test('13. Testar se as notas são números', () => {
        aluno = new Aluno('Roberta', [8, '6']);
        expect(() => aluno.calcularMedia()).toThrow();
    });

    test('14. Testar se o aluno pode ser aprovado faltando uma prova e tirando nota máxima na última', () => {
        aluno = new Aluno('Lúcia', [10]); // Uma nota apenas
        expect(aluno.calcularMedia()).toBe(10);
        expect(aluno.statusAprovacao()).toBe('aprovad@');
    });

    test('15. Testar se todas as notas iguais a zero retornam menção "MI"', () => {
        aluno = new Aluno('Mário', [0, 0]);
        expect(aluno.obterMencao()).toBe('MI');
    });

    test('16. Testar se notas muito próximas de 7 retornam a menção correta', () => {
        aluno = new Aluno('Sofia', [6.7, 7.1]);
        expect(aluno.obterMencao()).toBe('MM');
    });

    test('17. Testar se uma única nota zero afeta a aprovação', () => {
        aluno = new Aluno('Paula', [0, 8]);
        expect(aluno.statusAprovacao()).toBe('reprovad@');
    });

    test('18. Testar se a soma total das notas é correta', () => {
        aluno = new Aluno('Lucas', [5, 5, 5, 5]);
        expect(aluno.calcularMedia()).toBe(5);
    });

    test('19. Testar se a função aprovado funciona com menção MM', () => {
        aluno = new Aluno('Alice', [6, 4]);
        expect(aluno.statusAprovacao()).toBe('aprovad@');
    });

    test('20. Testar se aluno com notas abaixo de 5 é reprovado', () => {
        aluno = new Aluno('Gustavo', [3, 4]);
        expect(aluno.statusAprovacao()).toBe('reprovad@');
    });
});
