import Router from "koa-router"

const indexRouter = new Router()
indexRouter.get('/', async (ctx, next) => {
  ctx.body = { message: "hello world" }
  ctx.status = 200
  next()
})

indexRouter.put('/:test', async (ctx, next) => {
  ctx.body = { message: ctx.params.test }
  ctx.status = 200
  next()
})
indexRouter.get('/test', async (ctx, next) => {
  ctx.body = { message: "this test works" }
  ctx.status = 200
  next()
})
indexRouter.get('/v3', async (ctx, next) => {
  ctx.body = { message: "1.0.3 update successful" }
  ctx.status = 200
  next()
})

export { indexRouter }
