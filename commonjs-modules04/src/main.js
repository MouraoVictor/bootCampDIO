const p = require("./services/products")
const config = require("./services/config")
const dataBase = require("./services/database")

const { getFullName, productType } = require("./services/products")

async function main() {

    console.log("Carrinho Compras:");

    p.getFullName("400", "SAS")

    p.getFullName("401", "SUS")

    p.getProductLabel("Varinha mágica.")

    console.log(config.devArea.production + " - " + config.devArea.version);

    console.log(config.client);

    console.log(p.productType.tax);

    dataBase.connectToDatabase("banco dados");

    dataBase.disconnectDatabase();

    getFullName("SUSSSSS", "llllllllllllll")

}

main();
