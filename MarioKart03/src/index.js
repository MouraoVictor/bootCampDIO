const player1 = {
    name: 'Mario',
    speed: 4,
    handling: 3,
    power: 3,
    points: 0
};

const player2 = {
    name: 'Luigi',
    speed: 3,
    handling: 4,
    power: 4,
    points: 0
};

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random()
    let result

    switch (true) {
        case random < 0.33:
            result = "Straight"
            break;
        case random < 0.66:
            result = "Turn"
            break
        default:
            result = "FIGHT"
            break;
    }

    return result;

}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolled a dice of ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);

}

async function playRaceEngine(character1, character2) {

    for (let round = 1; round <= 5; round++) {
        console.log(`🏁 Round ${round}`);

        // get random block
        let block = await getRandomBlock()
        console.log(`Block: ${block}`);


        // Roll the Dice
        let diceResult1 = await rollDice()
        let diceResult2 = await rollDice()

        // skill test
        let TotalSkill1 = 0
        let TotalSkill2 = 0

        if (block === "Straight") {
            TotalSkill1 = diceResult1 + character1.speed
            TotalSkill2 = diceResult2 + character2.speed

            await logRollResult(character1.name, "speed", diceResult1, character1.speed)
            await logRollResult(character2.name, "speed", diceResult2, character2.speed)
        }

        if (block === "Turn") {
            TotalSkill1 = diceResult1 + character1.handling
            TotalSkill2 = diceResult2 + character2.handling
            await logRollResult(character1.name, "handling", diceResult1, character1.handling)
            await logRollResult(character2.name, "handling", diceResult2, character2.handling)
        }

        if (block === "FIGHT") {
            let powerResult1 = diceResult1 + character1.power
            let powerResult2 = diceResult2 + character2.power

            console.log(`🥊 ${character1.name} had a fight with ${character2.name}!🥊`);

            await logRollResult(character1.name, "power", diceResult1, character1.power)
            await logRollResult(character2.name, "power", diceResult2, character2.power)

            if (powerResult1 > powerResult2) {
                if (character2.points > 0) {
                    character2.points--
                    console.log(`${character1.name} won the figth. ${character2.name} lost one point 🐢`)
                }
            }
            else if (powerResult1 < powerResult2) {
                if (character1.points > 0) {
                    character1.points--
                    console.log(`${character2.name} won the figth. ${character1.name} lost one point 🐢`)
                }
            }
            else {
                console.log("Draw! No one has lost any points!");
            }

        }

        if (TotalSkill1 > TotalSkill2) {
            console.log(`${character1.name} won one point!`);
            character1.points++
        } else if (TotalSkill1 < TotalSkill2) {
            console.log(`${character2.name} won one point!`);
            character2.points++
        }

        console.log("-".repeat(40));

    }
}

(async function main() {
    console.log(`🏁🚨 Race between ${player1.name} and ${player2.name} starting...\n`)

    await playRaceEngine(player1, player2);


})();