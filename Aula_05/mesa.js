// Questão #1
function polegadasParaCentimetro(polegadas) {
    return polegadas * 2.54;
}
console.log(polegadasParaCentimetro(10));

// Questão #2
function stringParaUrl(string) {
  return "http://www." + string + ".com.br"
}
console.log(stringParaUrl("google"));

// Questão #3
function gritar(string) {
  return string + "!";
}
console.log(gritar("Olá"));

// Questão #4
function calcularIdadeDeCachorro(idade) {
  return idade * 7;
}
console.log(calcularIdadeDeCachorro(2));

// Questão #5
function calcularHoraDeTrabalho(salario) {
  return salario / 160;
}
console.log(calcularHoraDeTrabalho(2000));

// Questão #6
function calcularIMC(peso, altura) {
  const imc = peso / (altura * altura);
  return (imc * 10000);
}
console.log(calcularIMC(80, 180));
console.log(calcularIMC(65, 160));
console.log(calcularIMC(72, 183))

// Questão #7
function textoEmCaixaAlta(string) {
  return string.toUpperCase();
}
console.log(textoEmCaixaAlta("lorem ipsum dolor sit amet"));

// Questão #8
function tipoDeDado(valor) {
  return typeof valor;
}
console.log(tipoDeDado(10));
console.log(tipoDeDado("batata"));
console.log(tipoDeDado(true));

// Questão #8
function calcularCircunferencia(raio) {
  return 2 * Math.PI * raio;
}
console.log(calcularCircunferencia(2));