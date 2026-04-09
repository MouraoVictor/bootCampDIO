async function organizarLista(entrada) {
    // Transforma a string em um array, quebrando na vírgula
    const nomesArray = entrada.split(',');

    // Ordena o array em ordem alfabética
    // O .sort() sem parâmetros funciona perfeitamente para strings simples
    nomesArray.sort();

    // Junta os elementos do array de volta em uma string, separados por vírgula
    const resultado = nomesArray.join(',');

    return resultado;
}

async function execute() {
    const entrada = await gets();
    const saida = await organizarLista(entrada);

    print(saida);
}

execute();