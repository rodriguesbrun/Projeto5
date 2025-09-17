import express from "express"
import routes from "./routes.js"

const app = express()

app.use(express.json())

//teste conexão api
app.get("/health", (_, response) => {
    response.json({ ok: true, server: 'up' })
})

// rotas da api
app.use('/api', routes)


export default app