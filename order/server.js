const express = require("express")
const app = express();
const PORT = 8082


app.get("/list", (req, res) => {
    const data = [
        {
            "id": 1,
            "title": "Payment-1",
            "completed": false
        },
        {
            "id": 2,
            "title": "Payment-2",
            "completed": false
        },
        {
            "id": 3,
            "title": "Payment-3",
            "completed": false
        },
        {
            "id": 4,
            "title": "Payment-4",
            "completed": false
        },
        {
            "id": 5,
            "title": "Payment-5",
            "completed": false
        }
    ];
    res.send({ message: "Payment List ", data })
})


app.get("/", (req, res)=>{
    res.send({message:"I am from order service"})
})


app.listen(PORT, (err) => {
    if (!err) {
        console.log(`Server is running on PORT : http://localhost:${PORT}`);
    }
})