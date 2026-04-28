import { PlayerModel } from "../models/player-model";

const database: PlayerModel[] = [

    {
        "id": 1,
        "name": "Pelé",
        "club": "Retired",
        "nationality": "Brazil",
        "position": "Forward",
        "statistics": {
            "Overall": 98,
            "Pace": 93,
            "Shooting": 96,
            "Passing": 90,
            "Dribbling": 95,
            "Defending": 55,
            "Physical": 84
        }
    },
    {
        "id": 2,
        "name": "Diego Maradona",
        "club": "Retired",
        "nationality": "Argentina",
        "position": "Attacking Midfielder",
        "statistics": {
            "Overall": 97,
            "Pace": 88,
            "Shooting": 91,
            "Passing": 93,
            "Dribbling": 97,
            "Defending": 40,
            "Physical": 75
        }
    },
    {
        "id": 3,
        "name": "Lionel Messi",
        "club": "Inter Miami",
        "nationality": "Argentina",
        "position": "Right Winger",
        "statistics": {
            "Overall": 98,
            "Pace": 85,
            "Shooting": 94,
            "Passing": 95,
            "Dribbling": 96,
            "Defending": 34,
            "Physical": 65
        }
    },
    {
        "id": 4,
        "name": "Cristiano Ronaldo",
        "club": "Al Nassr",
        "nationality": "Portugal",
        "position": "Striker",
        "statistics": {
            "Overall": 97,
            "Pace": 89,
            "Shooting": 95,
            "Passing": 82,
            "Dribbling": 88,
            "Defending": 35,
            "Physical": 82
        }
    },
    {
        "id": 5,
        "name": "Ronaldo Nazário",
        "club": "Retired",
        "nationality": "Brazil",
        "position": "Striker",
        "statistics": {
            "Overall": 96,
            "Pace": 94,
            "Shooting": 95,
            "Passing": 80,
            "Dribbling": 95,
            "Defending": 40,
            "Physical": 80
        }
    },
    {
        "id": 6,
        "name": "Zinedine Zidane",
        "club": "Retired",
        "nationality": "France",
        "position": "Attacking Midfielder",
        "statistics": {
            "Overall": 96,
            "Pace": 75,
            "Shooting": 85,
            "Passing": 96,
            "Dribbling": 95,
            "Defending": 65,
            "Physical": 86
        }
    },
    {
        "id": 7,
        "name": "Ronaldinho Gaúcho",
        "club": "Retired",
        "nationality": "Brazil",
        "position": "Left Winger",
        "statistics": {
            "Overall": 94,
            "Pace": 90,
            "Shooting": 86,
            "Passing": 91,
            "Dribbling": 95,
            "Defending": 38,
            "Physical": 77
        }
    },
    {
        "id": 8,
        "name": "Paolo Maldini",
        "club": "Retired",
        "nationality": "Italy",
        "position": "Center Back",
        "statistics": {
            "Overall": 95,
            "Pace": 82,
            "Shooting": 55,
            "Passing": 75,
            "Dribbling": 70,
            "Defending": 96,
            "Physical": 85
        }
    },
    {
        "id": 19,
        "name": "David Beckham",
        "club": "Retired",
        "nationality": "England",
        "position": "Midfielder",
        "statistics": {
            "Overall": 85,
            "Pace": 76,
            "Shooting": 82,
            "Passing": 90,
            "Dribbling": 84,
            "Defending": 70,
            "Physical": 72
        }
    }
];


export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id);
}