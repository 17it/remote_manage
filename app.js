const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();
const restart = require('./src/restart');
const dev_game = require('./src/dev-game');

app.use(route.get('/', (ctx) => {
  ctx.response.body = 'hello world';
}));

app.use(route.get('/restart', async (ctx, next) => {
  let res = await restart;
  
  ctx.body = res;
}));

app.use(route.get('/dev-game', async (ctx, next) => {
  let res = await dev_game;
  
  ctx.body = res;
}));

app.listen(3005);