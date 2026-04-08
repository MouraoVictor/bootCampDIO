import prompt from "prompt";
import handle from "./handle.js"
import chalk from "chalk";

async function createPassword() {
    console.log(chalk.green.bold("password"))
    const password = await handle();
    console.log(password);

}

export default createPassword;