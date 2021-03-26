const koa = require('koa');
const app = new koa();

app.use(ctx => {
  ctx.body = 'Hello, Koa!';
});

app.listen(4000, () => {
  console.log('Koa server listening to port 4000');
});