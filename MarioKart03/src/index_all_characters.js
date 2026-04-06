const playerMario = {
    name: 'Mario',
    speed: 4,
    handling: 3,
    power: 3,
    points: 0
};

const playerLuigi = {
    name: 'Luigi',
    speed: 3,
    handling: 4,
    power: 4,
    points: 0
};

const playerPeach = {
    name: 'Peach',
    speed: 3,
    handling: 4,
    power: 2,
    points: 0
};

const playerBowser = {
    name: 'Bowser',
    speed: 5,
    handling: 2,
    power: 5,
    points: 0
};

const playerYoshi = {
    name: 'Yoshi',
    speed: 2,
    handling: 4,
    power: 3,
    points: 0
};

const playerDonkeyKong = {
    name: 'Donkey Kong',
    speed: 2,
    handling: 2,
    power: 5,
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

// gets a random block for fight, either Hull (-1 points) or Bomb (-2 points)
async function getRandomBlockForFight() {
    let random = Math.random()
    let result

    switch (true) {
        case random < 0.50:
            result = "Hull"
            break;
        default:
            result = "Bomb"
            break;
    }
    return result;
}

async function getRandomPointOfFight() {
    let random = Math.random()
    let result

    switch (true) {
        case random < 0.50:
            result = "Won"
            break;

        default:
            result = "Nothing"
            break;
    }
    return result
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName}🎲 rolled a dice of ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function playRaceEngine(character1, character2) {

    for (let round = 1; round <= 10; round++) {
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

            if (TotalSkill1 > TotalSkill2) {
                console.log(`${character1.name} won one point!`);
                character1.points++
            } else if (TotalSkill1 < TotalSkill2) {
                console.log(`${character2.name} won one point!`);
                character2.points++
            } else {
                console.log("Draw! No one won any points!");
            }
        }

        if (block === "Turn") {
            TotalSkill1 = diceResult1 + character1.handling
            TotalSkill2 = diceResult2 + character2.handling
            await logRollResult(character1.name, "handling", diceResult1, character1.handling)
            await logRollResult(character2.name, "handling", diceResult2, character2.handling)

            if (TotalSkill1 > TotalSkill2) {
                console.log(`${character1.name} won one point!`);
                character1.points++
            } else if (TotalSkill1 < TotalSkill2) {
                console.log(`${character2.name} won one point!`);
                character2.points++
            } else {
                console.log("Draw! No one won any points!");
            }
        }

        if (block === "FIGHT") {
            let powerResult1 = diceResult1 + character1.power
            let powerResult2 = diceResult2 + character2.power

            console.log(`🥊 ${character1.name} had a fight with ${character2.name}!🥊`);

            // get random block for fight
            await logRollResult(character1.name, "power", diceResult1, character1.power)
            await logRollResult(character2.name, "power", diceResult2, character2.power)

            const fightBlock = await getRandomBlockForFight()
            let damage = 0
            if (fightBlock === "Hull") {
                damage = 1;
            } else if (fightBlock === "Bomb") {
                damage = 2;
            }

            const fightOutcome = await getRandomPointOfFight()

            if (powerResult1 > powerResult2) {
                if (character2.points > 0) {
                    character2.points = character2.points - damage
                    if (character2.points < 0) character2.points = 0; // Ensure points don't go negative
                    console.log(`${character1.name} won the figth using a ${fightBlock}. ${character2.name} lost ${damage} point(s) 🐢`)
                } else {
                    console.log(`${character1.name} won the figth using a ${fightBlock}, but ${character2.name} has no points to lose!`);
                }
                if (fightOutcome === "Won") {
                    character1.points++;
                    console.log(`${character1.name} won the fight and earned 1 turbo point!`);
                }
            }
            else if (powerResult1 < powerResult2) {
                if (character1.points > 0) {
                    character1.points = character1.points - damage
                    if (character1.points < 0) character1.points = 0; // Ensure points don't go negative
                    console.log(`${character2.name} won the figth using a ${fightBlock}. ${character1.name} lost ${damage} point(s) 🐢`)
                } else {
                    console.log(`${character2.name} won the figth using a ${fightBlock}, but ${character1.name} has no points to lose!`);
                }
                if (fightOutcome === "Won") {
                    character2.points++;
                    console.log(`${character2.name} won the fight and earned 1 turbo point!`);
                }
            }
            else {
                console.log("Draw! No one has lost any points!");
            }

        }

        console.log("-".repeat(40));

    }

}

async function declareWinner(character1, character2) {
    console.log(`Final Result:`);

    console.log(`${character1.name}: ${character1.points} point(s)`);
    console.log(`${character2.name}: ${character2.points} point(s)`);

    if (character1.points > character2.points) {
        console.log(`🏆 ${character1.name} won the race! 🏆`);
    } else if (character1.points < character2.points) {
        console.log(`🏆 ${character2.name} won the race! 🏆`);
    } else {
        console.log("It's a tie!✌️");
    }

    console.log("-".repeat(40) + "\n");

}

(async function main() {

    const player1 = playerMario
    const player2 = playerPeach

    console.log(`🏁🚨 Race between ${player1.name} and ${player2.name} starting...\n`)

    await playRaceEngine(player1, player2);

    await declareWinner(player1, player2);

})();