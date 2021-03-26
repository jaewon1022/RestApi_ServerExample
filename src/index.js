const koa = require('koa');
const mongoose = require('mongoose');

const User = require('./models/user.model');

const app = new koa();

mongoose
  .connect("mongodb://127.0.0.1:27017", {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(ctx => {
  ctx.body = 'Hello, Koa!';
});

app.listen(4000, () => {
  console.log('Koa server listening to port 4000');
});