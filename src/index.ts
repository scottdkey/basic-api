import koa from "koa"
import bodyParser from "koa-bodyparser"
import { indexRouter } from "./routers/indexRouter"
import { config } from "dotenv"

config()

const app = new koa()
app.use(bodyParser())


const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 5000
// const PORT: string = process.env.NODE_ENV == 'test' ? "8000" : envPort

app.use(indexRouter.routes())

export const server = app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`)
})



