"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/repositories/players-repository.ts
var players_repository_exports = {};
__export(players_repository_exports, {
  findAllPlayers: () => findAllPlayers,
  findPlayerById: () => findPlayerById
});
module.exports = __toCommonJS(players_repository_exports);
var database = [
  {
    "id": 1,
    "name": "Pel\xE9",
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
    "name": "Ronaldo Naz\xE1rio",
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
    "name": "Ronaldinho Ga\xFAcho",
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
    "id": 9,
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
var findAllPlayers = () => __async(null, null, function* () {
  return database;
});
var findPlayerById = (id) => __async(null, null, function* () {
  return database.find((player) => player.id === id);
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  findAllPlayers,
  findPlayerById
});
