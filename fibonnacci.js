
function fibonacci(n) {
    let a = 0, b = 1, temp;
    
    if (n === 0 || n === 1) {
        return true;
    }
    
    while (b < n) {
        temp = a + b;
        a = b;
        b = temp;
    }
    
    return b === n;
}

let numero = parseInt(prompt("Informe um número:"));

if (fibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
}

