const databaseType = {
    userType: "admin",
    typeData: "dataLocal",
}

async function connectToDatabase(dataName) {
    console.log(`Conectando ao Banco ${dataName}...`);
}

async function disconnectDatabase() {
    console.log(`Desconectando do Banco de Dados...`);

}

export {
    connectToDatabase,
    disconnectDatabase,
    databaseType,
}