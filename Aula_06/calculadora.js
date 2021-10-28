// Calculadora Nível 1
function adicionar(num1, num2) {
    return num1 + num2;
}

function subtrair(num1, num2) {
  return num1 - num2;
}

function multiplicar(num1, num2) {
  return num1 * num2;
}

function dividir(num1, num2) {
  return num1 / num2;
}

// Calculadora Nível 2
console.log ("-------------- Teste de Operações / Calculadora --------------")
console.log("Adição: " + adicionar(10, 5));
console.log("Subtração: " + subtrair(10, 5));
console.log("Multiplicação: " + multiplicar(50, 5));
console.log("Divisão: " + dividir(3, 15));
console.log("Divisão Por Zero: " + dividir(5, 0));

// Calculadora Nível 3
function quadradoDoNumero(num) {
  return multiplicar(num, num);
}
console.log(quadradoDoNumero(5))

function mediaDeTresNumeros(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}
console.log(mediaDeTresNumeros(10, 20, 30));

function calculaPorcentagem(num1, num2) {
  return (num1 * num2) / 100;
}
console.log(calculaPorcentagem(10, 5));

function geradorDePorcentagem(num1, num2) {
  return dividir(num1, dividir(num2, 100)) + '%';
}
console.log(geradorDePorcentagem(50, 500));

  