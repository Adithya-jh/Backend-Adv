const express = require('express');
const zod = require('zod');
const jwt = require('jsonwebtoken');
const { User } = require('../db');
const JWT_SECRET = require('../config');
const { authMiddleware } = require('../middleware');

const router = express.Router();

const signupSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
  firstname: zod.string(),
  lastname: zod.string(),
});

router.post('/signup', async (req, res) => {
  const body = req.body;
  const { success } = signupSchema.parseSafe(req.body);
  if (!success) {
    return res.json({
      message: 'Invalid inputs',
    });
  }

  const user = User.findOne({
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

const signinBody = zod.object({
  username: zod.string.email(),
  password: zod.string(),
});

router.post('/signin', async (req, res) => {
  const { success } = signinBody.parseSafe(req.body);
  if (!success) {
    return res.status(411).json({
      message: 'Invalid inputs',
    });
  }

  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );

    res.json({
      token: token,
    });
    return;
  }

  res.status(411).json({
    message: 'Error while logging in',
  });
});

const updateBody = zod.object({
  firstname: zod.string(),
  lastname: zod.string(),
  password: zod.string(),
});

router.put('/', authMiddleware, async (req, res) => {
  const { success } = updateBody.parseSafe(req.body);

  if (!success) {
    res.status(411).json({
      message: 'Error while updating',
    });
  }

  await User.updateOne(req.body, {
    id: req.userId,
  });

  res.json({
    message: 'updated bruh',
  });
});

router.get('/bulk', async (req, res) => {
  const filter = req.query.filter || '';
  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastname: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

module.exports = router;
