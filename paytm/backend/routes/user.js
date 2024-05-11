const express = require('express');
const zod = require('zod');
const jwt = require('jsonwebtoken');
const { user } = require('../db');
const JWT_SECRET = require('../config');

const router = express.Router();

const signupSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
  firstname: zod.string(),
  lastname: zod.string(),
});

router.get('/', (req, res) => {});

router.post('/signup', async (req, res) => {
  const body = req.body;
  const { success } = signupSchema.parseSafe(req.body);
  if (!success) {
    return res.json({
      message: 'Invalid inputs',
    });
  }

  const user = user.findOne({
    username: body.userName,
  });

  if (user._id) {
    return res.json({
      message: 'Email already taken',
    });
  }
  const dbUser = await user.createOne(body);
  const token = jwt.sign(
    {
      userId: dbUser._id,
    },
    JWT_SECRET
  );
  res.json({
    message: 'user created successfully',
    token: token,
  });
});

module.exports = router;
