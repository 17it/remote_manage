const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();
const restart = require('./src/restart');

app.use(route.get('/', (ctx) => {
  ctx.response.body = 'hello world';
}));

app.use(route.get('/restart', async (ctx, next) => {
  let res = await restart;
  
  ctx.body = res;
}));

app.listen(3005);