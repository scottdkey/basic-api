import Router from "koa-router"

const indexRouter = new Router()
indexRouter.get('/', async (ctx) => {
  ctx.body = { message: "hello world" }
  ctx.status = 200
})

export default indexRouter
