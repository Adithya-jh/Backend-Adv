const express = require('express');
const adminMiddleware = require('../middleware/admin');
const { admin, course } = require('../db/index');

const app = express();

const router = express.router();

router.post('/signup', async function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;

  await admin.create({
    username: username,
    password: password,
  });

  res.json({ message: 'created admin' });
});

router.post('/course', adminMiddleware, async function (req, res) {
  const title = req.headers.title;
  const description = req.headers.description;

  await course.create({
    title: title,
    description: description,
  });

  res.json({ message: 'course created' });
});

router.get('/course', function (req, res) {
  const response = res.find({});

  res.json({});
});

module.exports = router;
