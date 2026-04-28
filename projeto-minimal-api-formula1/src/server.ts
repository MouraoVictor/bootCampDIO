import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true })

//deixa qualquer um consumir a api
server.register(cors, {
    origin: "*",
    methods: ["GET", "POST"]
})

const teams = [
    { id: 1, name: "McLaren" },
    { id: 2, name: "Mercedes" },
    { id: 3, name: "Ferrari" },
    { id: 4, name: "Red Bull" },
    { id: 5, name: "Audi" },
    { id: 6, name: "Cadilac" },
    { id: 7, name: "Aston Martin" },
    { id: 8, name: "Williams" },
    { id: 9, name: "Alpine" },
    { id: 10, name: "Racing Bulls" },
    { id: 11, name: "Haas" },
]

const drivers = [
    // Red Bull
    { id: 1, name: "Max Verstappen", team: "Red Bull" },
    { id: 2, name: "Isack Hadjar", team: "Red Bull" },

    // Ferrari
    { id: 3, name: "Lewis Hamilton", team: "Ferrari" },
    { id: 4, name: "Charles Leclerc", team: "Ferrari" },

    // McLaren
    { id: 5, name: "Lando Norris", team: "McLaren" },
    { id: 6, name: "Oscar Piastri", team: "McLaren" },

    // Mercedes
    { id: 7, name: "George Russell", team: "Mercedes" },
    { id: 8, name: "Kimi Antonelli", team: "Mercedes" },

    // Aston Martin
    { id: 9, name: "Fernando Alonso", team: "Aston Martin" },
    { id: 10, name: "Lance Stroll", team: "Aston Martin" },

    // Williams
    { id: 11, name: "Alex Albon", team: "Williams" },
    { id: 12, name: "Carlos Sainz", team: "Williams" },

    // Alpine
    { id: 13, name: "Pierre Gasly", team: "Alpine" },
    { id: 14, name: "Jack Doohan", team: "Alpine" },

    // Audi
    { id: 15, name: "Nico Hülkenberg", team: "Audi" },
    { id: 16, name: "Gabriel Bortoleto", team: "Audi" },

    // Racing Bulls
    { id: 17, name: "Yuki Tsunoda", team: "Racing Bulls" },
    { id: 18, name: "Liam Lawson", team: "Racing Bulls" },

    // Haas
    { id: 19, name: "Esteban Ocon", team: "Haas" },
    { id: 20, name: "Oliver Bearman", team: "Haas" },

    // Cadillac
    { id: 21, name: "Valtteri Bottas", team: "Cadilac" },
    { id: 22, name: "Sergio Perez", team: "Cadilac" }
]

server.get("/teams", async (request, response) => {
    response.type("application/json").code(200)

    return { teams }
});

interface TeamParams {
    id: string
}

server.get<{ Params: TeamParams }>("/teams/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const team = teams.find(d => d.id === id);

    if (!team) {
        response.type("application/json").code(404)
        return { message: "Team Not Found" }
    } else {
        response.type("application/json").code(200)
        return { team }
    }
})

server.get("/drivers", async (request, response) => {
    response.type("application/json").code(200)
    return { drivers }
})

interface DriverParams {
    id: string
}

server.get<{ Params: DriverParams }>("/drivers/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find(d => d.id === id);

    if (!driver) {
        response.type("application/json").code(404)
        return { message: "Driver Not Found" }
    } else {
        response.type("application/json").code(200)
        return { driver }
    }
})

server.listen({ port: 3333 }, () => {
    console.log("Server init");
});