const express = require("express")
const app = express();
const PORT = 8081


app.get("/payment", (req, res) => {
    const data = [
        {
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "id": 2,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "id": 3,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "id": 4,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "id": 5,
            "title": "delectus aut autem",
            "completed": false
        }
    ];
    res.send({ message: "Orders List ", data })
})

app.get("/", (req, res)=>{
    res.send({message:"I am from payment service"})
})


app.listen(PORT, (err) => {
    if (!err) {
        console.log(`Server is running on PORT : http://localhost:${PORT}`);
    }
})