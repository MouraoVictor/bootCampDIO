import chalk from "chalk";

const mainPrompt = [
    {
        name: "select",
        description: chalk.yellow.bold("Escolha a Ferramenta (1 - QRCODE ou 2 - Password)"),
        pattern: /^[1-2]+$/,
        message: chalk.italic("Escolha apenas entre 1 e 2\n"),
        required: true
    }
]


export default mainPrompt;