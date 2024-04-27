const express = require('express');

const { admin, course, user, course } = require('../db/index');
const { userMiddleware } = require('../middleware/user');
const router = express.router();

router.post('/signup', async function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;

  await user.create({
    username: username,
    password: password,
  });

  res.json({ message: 'user created ' });
});

router.get('/course', async function (req, res) {
  const response = await course.find({});
  res.json({ message: 'Got all courses', response: response });
});

router.post('/course/:courseId', userMiddleware, async function (req, res) {
  const courseId = req.params.courseId;
  const username = req.headers.username;

  await user.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchased: courseId,
      },
    }
  );

  res.json({ message: 'course purchased' });
});

//to get all the purchased courses of  a particular user
router.get('/purchasedCourses', userMiddleware, async function (req, res) {
  const user = user.findOne({
    username: req.headers.username,
  });

  const courses = await course.find({
    _id: {
      $in: user.purchasedCourse,
    },
  });

  res.json({
    courses: course,
  });
});
