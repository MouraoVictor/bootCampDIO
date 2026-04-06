//usando o ecma, temos que passar a extensão do arquivo, nesse caso o .js
//export default
//import connectToDatabase from "./utils/database.js";

//export múltiplo
//import * as database from "./utils/database.js";
import { connectToDatabase, databaseType } from "./utils/database.js";

// geralmente os arquivos mjs são usados somente para colocar móduglos, ou seja, não terá programação propriamente dentro dele, somente o módulo que será exportado posteriormente. 

// database.connectToDatabase("aiaiai");

// database.disconnectDatabase();

connectToDatabase("TOME")

console.log("tipo: " + databaseType.userType + " " + databaseType.typeData);

import { key, getDataFromAPI } from "./utils/api.js"

getDataFromAPI()

console.log("key: " + key.value + " : " + key.permission);
