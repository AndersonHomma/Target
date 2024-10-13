
function verificarA(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {

        if (str[i] === 'a' || str[i] === 'A') {
            count++;
        }
    }

    if (count > 0) {
        console.log(`A letra 'a' ocorre ${count} vezes na string.`);
    } else {
        console.log("A letra 'a' não foi encontrada na string.");
    }
}


let texto = prompt("Digite uma string:");

verificarA(texto);
