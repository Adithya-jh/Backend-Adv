import client from 'prom-client';

const requestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route'],
});

const activeUserGauge = new client.Gauge({
  name: 'active_users',
  help: 'Total number of HTTP requests hasnt resolved',
  labelNames: ['method', 'route'],
});

//@ts-ignore
export const reqCount = (req, res, next) => {
  requestCounter.inc({
    method: req.method, //GET ,POST
    route: req.path, // /route
  });

  activeUserGauge.inc({
    method: req.method, //GET ,POST
    route: req.path, // /route
  });
  //whenever the req is over then it is no longer active -> so decrease the count.
  res.on('finish', () => {
    activeUserGauge.dec({
      method: req.method, //GET ,POST
      route: req.path, // /route
    });
  });
  next();
};

export const httpRequestDurationMicroseconds = new client.Histogram({
  name: 'http_request_duration_ms',
  help: 'Duration of HTTP requests in ms',
  labelNames: ['method', 'route', 'code'],
  buckets: [0.1, 5, 15, 50, 100, 300, 500, 1000, 3000, 5000], // Define your own buckets here
});

//@ts-ignore
export function reqCountHisto(res, req, next) {
  const startTime = Date.now();

  res.on('finish', () => {
    const endTime = Date.now();
    httpRequestDurationMicroseconds.observe(
      {
        method: req.method,
        route: req.path,
        code: res.statusCode,
      },
      endTime - startTime
    );
  });

  next();
}
