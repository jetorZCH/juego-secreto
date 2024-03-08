let numeroSecreto = 0;
let intentos = 0;
let listadeNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
   let elementoHTML = document.querySelector(elemento); 
   elementoHTML.innerHTML = texto;
   return;
}

function verificarIntento() {
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); // el value lee el valor

   if(numeroDeUsuario === numeroSecreto){
      asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} veces`);
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
      if (numeroDeUsuario > numeroSecreto){
      asignarTextoElemento('p', 'El numero secreto es menor');
      } else {
        asignarTextoElemento('p', 'El numero secreto es mayor');
      }
      intentos++;
      limpiarCaja();
    }
   return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';     
}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; // el uno se agrega para ajustar el rango
   
      console.log(numeroGenerado);
      console.log(listadeNumerosSorteados);
   
   // Si ya sorteamos todos los numeros
if (listadeNumerosSorteados.length == numeroMaximo){
 asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
} else {
    
       // Si el numero generado esta incluido en la lista
       if(listadeNumerosSorteados.includes(numeroGenerado)){
          return generarNumeroSecreto();
       } else {
         listadeNumerosSorteados.push(numeroGenerado)
         return numeroGenerado;
       }

}

}

function condicionesIniciales(){
  asignarTextoElemento('h1', 'Juego del numero secreto');
  asignarTextoElemento('p', `Indica un número secreto del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
  document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();




// 90 Hora de practicar


// function saludar() {
//    console.log("¡Hola, mundo!");
//  }
 
//  saludar();


//  function saludar2(nombre){
//    console.log(`Hola ${nombre}`);
//  }

//  saludar2('bad gyal');

//  function calcularDoble(numero) {
//    return numero * 2;
//  }
 
//  let resultadoDoble = calcularDoble(5);
//  console.log(resultadoDoble);


//  function promedio(n1, n2, n3){
//     parseInt(n1, n2, n3);
//     return (n1 + n2 + n3) / 3;
//  }

//  let average = promedio(8, 9, 8);
//  console.log(average);



//  function numeroMayor(nu1, nu2){
//    return nu1 > nu2 ? nu1 : nu2;
// }

// let resultado = numeroMayor(130, 110); 
// console.log(resultado);

// function parametro(num1){
//    return(num1 * num1);
// }

// console.log(parametro(44));

/*Desafio 2 */

// IMC

// function IMC(peso, altura){
//    return(peso / (altura * altura))
// }

// console.log(IMC(63, 1.83))

// //calculo factorial de un numero
// function calcularFactorial(numero) {
//   if (numero === 0 || numero === 1) {
//     return 1;
//   } else {
//     return numero * calcularFactorial(numero -1);
//   }
// }
// // Ejemplo de uso
// let numero = 5;
// let resultado = calcularFactorial(numero);
// console.log(`El factorial de ${numero} es ${resultado}`);


// //Calculo dolares a pesos mexicanos
// function dolarisacion(dolar){
//   return dolar * 17;
// }
// let dolar = 500;
// let calculoDolar = dolarisacion(dolar);
// console.log(`tu dinero en pesos mexicanos es ${calculoDolar}`);


// //calculo perimetro y area

// function AP(altura, anchura){
//   let area = altura * anchura;
//   let perimetro = (altura * 2) + (anchura *2);

//   console.log('Área ', area)
//   console.log('Perímetro ', perimetro)
// }

// let altura = 30;
// let anchura = 40;
// AP(altura, anchura);

// // Calculo perimetro area Circulo
// function APC(radio){
//   let pi = 3.14
//   let perimetro = (pi * radio * 2 );
//   let area = pi * radio * radio;

//   console.log('Área ', area)
//   console.log('Perímetro ', perimetro)
// }

// APC(9);

// //Calculo tablas de multiplicar
//  function tablasMultiplicar(numero){
   
//    for (i = 10; i >= 1; i--) {
//    let resultado = numero * i;
//    console.log(numero + ' x ' + i + ' = ' + resultado);
//    };
//  }

//  let numero = 3
//  tablasMultiplicar(numero);

/*Desafio 3 */ 
// let listaGenerica = [];
// let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python']

// lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// function mostrarLenguajes() {
//     console.log(lenguajesDeProgramacion);

// }

// mostrarLenguajes();

// function mostrarLenguajesInverse(){
//     for (let i = lenguajesDeProgramacion.length -1 ;i >= 0 ; i-- ){
//         console.log(lenguajesDeProgramacion[i])
//     }
// }

// mostrarLenguajesInverse();

// function calcularMedia(lista) {
//     let suma = 0;
//     for (let i = 0; i < lista.length; i++) {
//       suma += lista[i];
//     }
//     return suma / lista.length;
//   }
  
//   let numeros = [10, 10, 9, 8, 7];
//   let media = calcularMedia(numeros);
//   console.log('Média:', media);

// function encontrarMayorMenor(lista){
//     let mayor = lista[0];
//     let menor = lista[0];

    
//     for(i = 0; i < lista.length; i++){         
//     if (lista[i] > mayor){
//             mayor = lista[i];
//         }
//         if (lista[i] < menor){
//             menor = lista[i];
//         }
//     }

//     console.log('Mayor:', mayor);
//     console.log('Menor:', menor);

// }

// let numeros = [15, 8, 25, 5 ,12];
// encontrarMayorMenor(numeros);

// function calularSuma(lista){
// let suma = 0;
//     for(let i = 0; i < lista.length; i++){
//         suma += lista[i];        
//    }
//    return suma;
// }

// let numeros = [78, 90, 200, 800];
// let suma = calularSuma(numeros);
// console.log('Suma:', suma);

// function encontrarIndiceElemento(lista, elemento) {
//     for (let i = 0; i < lista.length; i++) {
//       if (lista[i] === elemento) {
//         return i; // Retorna el índice del elemento encontrado
//       }
//     }
//     return -1; // Retorna -1 si el elemento no se encuentra en la lista
//   }

// let paises = ['Corea', 'Japon', 'Rusia'];
// console.log(encontrarIndiceElemento(paises, 'Japon'))

// function sumArrays(arr1, arr2) {
//     let suma = [];
//     for (let i = 0; i < arr1.length; i++) {
//     suma.push(arr1[i] + arr2[i]);
//     }
//     return suma;
//     }

//     let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let arrayresultante = sumArrays(array1, array2);
// console.log(arrayresultante); // Salida: [5, 7, 9]

// function cuadradoNumeros(lista){ 
//     let cuadrado = [];
// for(i = 0; i < lista.length; i++){
//     cuadrado.push(lista[i] ** 2);
// }
// return cuadrado;
// }

// let numeros = [ 2, 3, 4, 5, 6 ,7, 8, 9 ,10];
// console.log(cuadradoNumeros(numeros));
