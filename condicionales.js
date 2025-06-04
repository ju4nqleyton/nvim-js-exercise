// #EJERCICIO 1
const esMayor = (a, b, c) => {
  const numeros = [a, b, c];
  let mayor = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
  return mayor;
};

const ordenarLista = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temporal = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temporal;
      }
    }
  }
  return array;
};

// console.log(esMayor(5, 3, 9));
// console.log(esMayor(42, 13, 79));
// console.log(esMayor(56, 33, 29));
// console.log(ordenarLista([3, 2, 1, 5, 3, 2, 6, 33, 2, 6, 3, 2]));

// EJERCICIO #2
const contadorPares = (limite) => {
  let acumulador = 0;
  for (let i = 1; i <= limite; i++) {
    if (i % 2 == 0) acumulador++;
  }
  return acumulador;
};

// console.log(contadorPares(10));
// console.log(contadorPares(33));
// console.log(contadorPares(64));

// EJERCICIO #3
const esPrimo = (numero) => {
  if (numero < 2) return false;
  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) return false;
  }
  return true;
};

// console.log(esPrimo(2));
// console.log(esPrimo(4));
// console.log(esPrimo(18));

// EJERCICIO #4
const sumarDigitos = (numero) => {
  const strNumero = String(numero).replace(".", "");
  const array = strNumero.split("").map(Number);
  let acumulador = 0;
  for (let i = 0; i < array.length; i++) {
    acumulador += array[i];
  }
  return acumulador;
};

// console.log(sumarDigitos(222));
// console.log(sumarDigitos(432));
// console.log(sumarDigitos(123));

// EJERCICIO #5
const piramide = (altura) => {
  let resultado = "";
  for (let i = 1; i <= altura; i++) {
    for (let k = 1; k <= i; k++) {
      resultado += "*";
    }
    resultado += "\n";
  }
  return resultado;
};

console.log(piramide(5));
