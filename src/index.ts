import koa from "koa"
import indexRouter from "./routers/indexRouter"


const app = new koa()



const PORT = process.env.PORT || 5000

app.use(indexRouter.routes())

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`)
})

export { app }