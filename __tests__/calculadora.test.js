const calculadora = require("../src/calculadora")

test('somar 2 + 3', () => {
// 1 - Prepara / Configura
// 1.1 - Valores de entrada
const numeroA = 2;
const numeroB = 3;
// 1.2 - Resultado esperado
const resultadoEsperado = 5;

// 2 - Executa
const somarDoisNumeros = calculadora.somarDoisNumeros;
const resultadoObtido = somarDoisNumeros(numeroA, numeroB);

// 3 - Valida
expect(resultadoObtido).toBe(resultadoEsperado);

})