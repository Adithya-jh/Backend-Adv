import { Hono } from 'hono';

const app = new Hono();

async function authMiddleware(c: any, next: any) {
  if (c.req.header('Authorization')) {
    //do validation
    await next();
  } else {
    return c.text('You donot have access');
  }
}

app.use(authMiddleware); //this is how we add middelware

app.post('/', authMiddleware, async (c) => {
  //body , headers , middlewares , query params, connecting to a db

  const body = await c.req.json();
  console.log(body);

  console.log(c.req.header('Authorization'));
  console.log(c.req.header('param'));

  return c.text('HI bruh');
});

// app.post('/users', (c) => {
//   return c.text('Hello Hono!');
// });

export default app;
