const senha = "servico5"; // mudei para minúsculas para testar o sucesso

const separado = senha.split(/(?<=[a-z])(?=\d)/i);

let verificacao = false; // Começa como falso e só valida se passar em tudo

if (separado.length === 2) {
    const letras = separado[0];
    const numeros = separado[1];

    verificacao = true; // Assume true e vai invalidando nos casos abaixo

    // Verifica se as letras são todas minúsculas
    if (letras !== letras.toLowerCase()) {
        verificacao = false;
    }

    // Verifica se há letras (split pode retornar string vazia se começar com número)
    if (letras.length === 0) {
        verificacao = false;
    }

    // Verifica se o número começa por 0 (CORRIGIDO: índice 0 e string "0")
    if (numeros[0] === "0") {
        verificacao = false;
    }

    // Verifica se há números
    if (!numeros || numeros.length === 0) {
        verificacao = false;
    }
}

if (verificacao) {
    console.log("valida");
} else {
    console.log("invalida");
}