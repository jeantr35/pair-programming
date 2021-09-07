/***
 * @Authors : Jean Trujillo y Joe Watson SBF
 * @Description : Evidencia un numero N elementos 
 * que correspondan a la serie fibonacci
 */

function serieFibonacci(numero) {
    if (numero <= 1) {
        return 1;
    }
    return serieFibonacci(numero -1) + serieFibonacci(numero -2);
}
let numero = parseInt(prompt("Ingrese el numero n para calcular la serie de fibonacci: "));
console.log(serieFibonacci(numero));
