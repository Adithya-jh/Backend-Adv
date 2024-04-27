//writing basic express boilerplate code
//with express.json middleware

const express = require('express');
const app = express();

app.use(express.json());

// in todo -> we have a title and description {title :String ,description :String} -> so for input validation we use ZOD
const { createTodo, updateTodo } = require('./types');

app.post('/todo', (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      message: 'you sent a wrong inputs',
    });
    return;
  }

  //if above cond satisfied -> put it in mongodb
});

app.get('/todo', (req, res) => {});

app.put('/completed', (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      message: 'you sent a wrong inputs',
    });
    return;
  }
});
