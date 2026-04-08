async function connectToDatabase(user, password) {
    if (user === process.env.USERDATABASE && password === process.env.PASSWORDDATABASE) {
        console.log("Conectado ao BD com sucesso.");
    } else {
        console.log("Falha ao conectar ao BD.");
    }
}

export default connectToDatabase;