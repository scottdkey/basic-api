import koa from "koa"
import bodyParser from "koa-bodyparser"
import { indexRouter } from "./routers/indexRouter"
import { config } from "dotenv"

config()

const app = new koa()
app.use(bodyParser())
const PORT = process.env.NODE_ENV == 'test' ? 8000 : 5000

app.use(indexRouter.routes())

export const server = app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`)
})



