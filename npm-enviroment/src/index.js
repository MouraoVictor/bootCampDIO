import connectToDatabase from "./database.js";

async function main() {

    const user = process.env.USERDATABASE
    const password = process.env.PASSWORDDATABASE

    connectToDatabase("user", password)
}

main();