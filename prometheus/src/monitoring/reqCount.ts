import client from 'prom-client';

const requestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route'],
});

//@ts-ignore
export const reqCount = (req, res, next) => {
  requestCounter.inc({
    method: req.method, //GET ,POST
    route: req.path, // /route
  });
  next();
};
