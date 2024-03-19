const gateway = require('fast-gateway')
const PORT = 9001


const checkAuth = (req, res, next) => {
    if (req.headers.token == 12345) {
        next()
    }
    else {
        res.send({ message: "Authentication failed" })
    }
}

const server = gateway({
    routes: [
        {
            prefix: "/order",
            target: "http://localhost:8082",
            middlewares: [
                checkAuth
            ]
        },
        {
            prefix: "/payment",
            target: "http://localhost:8081"
        }
    ]
})

server.get("/", (req, res) => {
    res.send({ message: "Gateway is working" })
})

server.start(PORT)
    .then((server) => {
        console.log("Gateway server is running at 9001 ");
    })