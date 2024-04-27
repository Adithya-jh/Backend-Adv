//writing basic express boilerplate code
//with express.json middleware

const express = require('express');
const app = express();
const { todo } = require('./db');

app.use(express.json());

// in todo -> we have a title and description {title :String ,description :String} -> so for input validation we use ZOD
const { createTodo, updateTodo } = require('./types');

app.post('/todo', async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      message: 'you sent a wrong inputs',
    });
    return;
  }

  //if above cond satisfied -> put it in mongodb
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({
    msg: 'Todo created',
  });
});

app.get('/todo', async (req, res) => {
  const todos = await todo.find({});

  res.json({
    todos: todos,
  });
});

app.put('/completed', async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      message: 'you sent a wrong inputs',
    });
    return;
  }

  //remember whenever a collection is created -> id will be automatically generated

  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: 'Todo marked as completed',
  });
});
