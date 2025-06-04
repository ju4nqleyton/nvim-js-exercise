// #1 EJERCICIO
const esPar = (numero) => {
  if (numero % 2 == 0) {
    return `${numero} es un numero par.`;
  } else {
    return `${numero} es un numero impar.`;
  }
};

const esPar2 = (numero) =>
  `${numero} es un número ${numero % 2 === 0 ? "par" : "impar"}.`;

// console.log(esPar(0));
// console.log(esPar(3));
// console.log(esPar(6));

// #2 EJERCICIO
const puedeVotar = (edad) => {
  if (edad >= 18) {
    return `usted tiene ${edad}, puede votar.`;
  } else {
    return `usted tiene ${edad}, no puede votar.`;
  }
};

const puedeVotar2 = (edad) =>
  `usted tiene ${edad}, ${edad >= 18 ? "puede votar" : "no puede votar"}.`;

// console.log(puedeVotar(17));
// console.log(puedeVotar(18));
// console.log(puedeVotar(21));

// #3 EJERCICIO
function sumaNumeros(limite) {
  let acumulador = 0;
  for (let i = 1; i <= limite; i++) {
    // console.log(i);
    acumulador += i;
  }
  return acumulador;
}

const sumaNumeros2 = (n) => (n * (n + 1)) / 2;

// console.log(sumaNumeros(5));
// console.log(sumaNumeros(6));
// console.log(sumaNumeros(10));

// #4 EJERCICIO
const tablaMultiplicar = (numero) => {
  let resultado = "";
  for (let i = 1; i <= 10; i++) {
    resultado += `${numero} X ${i} = ${numero * i}\n`;
  }
  return resultado;
};

const tablaMultiplicar2 = (numero) => {
  const lineas = [];
  for (let i = 1; i <= 10; i++) {
    lineas.push(`${numero} x ${i} = ${numero * i}`);
  }
  return lineas.join("\n");
};

// console.log(tablaMultiplicar(2));
// console.log(tablaMultiplicar(8));
// console.log(tablaMultiplicar(18));

// #5 EJERCICIO
const cuantosMultiplosTres = function (limite) {
  let acumulador = 0;
  for (let i = 1; i <= limite; i++) {
    if (i % 3 == 0) {
      acumulador++;
    }
  }
  return `entre el 1 y el ${limite}: hay ${acumulador} multiplos de 3.`;
};

const cuantosMultiplosTres2 = (limite) => {
  const multiplos = Array.from({ length: limite }, (_, i) => i + 1).filter(
    (n) => n % 3 === 0,
  );
  return `entre el 1 y el ${limite}: hay ${multiplos.length} múltiplos de 3.`;
};

// console.log(cuantosMultiplosTres(20));
