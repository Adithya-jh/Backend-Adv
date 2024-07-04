import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from 'hono';
import { verify } from 'hono/jwt';

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use('/*', async (c, next) => {
  //get the header
  //verify the header
  //if the header is correct, we proceed
  //if not, tell the user -  403

  //get the authorid and pass it in the route

  const header = c.req.header('authorization') || '';

  //Bearer token = ["Bearer" , "token "]
  const token = header.split(' ')[1];
  const response = await verify(token, c.env.JWT_SECRET);

  if (response) {
    // @ts-ignore
    c.set('userId', response.id); //we set the userid and we will use get() to get the userid in the routes
    await next();
  } else {
    c.status(403);
    return c.json({ error: 'unauthorized' });
  }
});

blogRouter.post('/', async (c) => {
  const body = await c.req.json();
  const authorId = c.get('userId'); // we got it from middleware
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blog = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: authorId, //basically it will come from the middleware .
    },
  });
  return c.json({
    id: blog.id,
  });
});

blogRouter.put('/', async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blog = await prisma.post.update({
    where: {
      id: body.id,
    },
    data: {
      title: body.title,
      content: body.content,
    },
  });
  return c.json({
    id: blog.id,
  });
});

blogRouter.get('/bulk', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blogs = await prisma.post.findMany();
  return c.json({
    blogs,
  });
});

blogRouter.get('/:id', async (c) => {
  const id = c.req.param('id');
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    //it is always advisable to use try catch while fetching from db
    const blog = await prisma.post.findFirst({
      where: {
        id: id,
      },
    });
    return c.json({
      blog,
    });
  } catch (e) {
    c.status(411);
    return c.json({
      message: 'error while fetching',
    });
  }
});
