const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')

    app.use(cors())

    next()
})

app.get("/teste", cors(), async function Teste(request, response, next) {
    response.json("funcionou")
})

app.listen('8080', function(){
    console.log("API funcionando!!")
})