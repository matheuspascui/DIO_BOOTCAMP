/*Este programa permite escolher um número e mostrar sua tabuada.*/

//escolhendo o número da tabuada desejada:
const numero_tabuada = 7;
console.log('Vamos imprimir a tabuada do ' + numero_tabuada);
//para construir a tabuada, usando um laço for:
for (let i = 0; i <= 10; i++) {
    console.log(i * numero_tabuada);
}
