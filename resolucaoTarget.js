// 1) Qual será o valor da variável SOMA? Vamos conferir
function soma(indice, soma, k) {
    while(k < indice) {
        k += 1
        soma += k
    }
    return soma
}

// resultado da variável soma passando os valores como parâmetro
console.log(soma(13, 0, 0)); // 91


// 2) informe um número e verifique se ele faz parte da sequência de Fibonacci
function fibo(numero) {
/* 
Esta função cria um array com os 200 primeiros números da sequencia de Fibonacci,
depois verifica de o número que o usuário colocou está no array e retorna um valor booleano
*/

    let maxArrayItens = 200;
    let fibo0 = 0;
    let fibo1 = 1;
    let contador = 3;
    var sequencia = [0, 1];

    while(contador <= maxArrayItens) {
        let fibo2 = fibo0 + fibo1;
        sequencia.push(fibo2);
        fibo0 = fibo1;
        fibo1 = fibo2;
        contador += 1;
    }

    if(sequencia.includes(numero)) {
        return true
    } else {
        return false
    }
}

console.log(fibo(4)); // false
console.log(fibo(89)); // true
console.log(fibo(120)); // false


// 3) descubra a lógica e complete o próximo elemento:
/*
a) 1, 3, 5, 7, 9 - ímpares
b) 2, 4, 8, 16, 32, 64, 128 - progressão geométrica
c) 0, 1, 4, 9, 16, 25, 36, 49 - número ímpares somados
d) 4, 16, 36, 64, 100 - só sei que foi assim
e) 1, 1, 2, 3, 5, 8, 13 - sequência de Fibo
f) 2, 10, 12, 16, 17, 18, 19, 200 - começam com "d"
*/

// 4) Um carro a 110km/h indo de Ribeirão Preto para Franca
// Um caminhão indo de Franca para Ribeirão Preto a 80km/h 

/*
Eu ia desenvolver uma função para calcular toda essa complexidade de tempo, distância e velocidade. 
Mas logicamente, se é pra calcular qual está mais perto de Ribeirão Preto quando eles se cruzarem,
eles estarão relativamente próximo um do outro e a distância será a mesma para as duas cidades,
a não ser por uma diferência de metros. 

Mas se o carro está saindo de Ribeirão e está mais rápido que o caminhão, quando eles se cruzarem,
ambos estarão mais proximos de Franca, destino do carro rápido. Então, quando eles se cruzarem,
o caminhão estará mais perto de Ribeirão Preto, pois ele está indo pra lá.
*/


// 5) escreva um programa que inverta os caracteres de uma string sem usar funções prontas.

function inverter(palavra) {
    let palavraInvertida = [];

    for(let index = palavra.length; index >= 0; index--) {
        palavraInvertida.push(palavra[index])
    }

    return palavraInvertida.join('')
}

console.log(inverter('vinicius')); // suiciniv
console.log(inverter('angelika')); // akilegna