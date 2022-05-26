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
