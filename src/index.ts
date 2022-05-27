/* Ejercicio – Par/Impar
• Desarrollar un algoritmo que dado un número,
ingresado por el usuario determine si el
número es par o impar y le informe al usuario
• En el caso de ser 0 (cero) el algoritmo deberá
informarlo */

let numeroValor: number = Number(prompt(`Ingreser Valor a comprobar`));
console.log(numeroValor);
if (numeroValor === 0) {
  console.log(`El numero Ingresado es 0`);
} else {
  if (numeroValor % 2 === 0) {
    console.log(`El nuemro: ${numeroValor} es Par `);
  } else {
    console.log(`El numero: ${numeroValor} es Impar`);
  }
}
