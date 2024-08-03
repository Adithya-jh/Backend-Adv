require('newrelic');
const winston = require('winston');
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  logger.info('route hit');
  if (Math.random() < 0.5) {
    logger.error('there was an err');
  }
  res.json({ message: 'hi there' });
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
// eu01xx9259282cb1d7720c219d001942FFFFNRAL
