const handler = require('serve-handler');
const http = require('http');

const server = http.createServer((request, response) => {
  // You pass two more arguments for config and middleware
  // More details here: https://github.com/zeit/serve-handler#options
  return handler(request, response, {
    "public": "build",
    "rewrites": [
      { "source": "video/**", "destination": "/index.html" },
      { "source": "user/login", "destination": "/index.html" },
    ]
  });
});

server.listen(3001, () => {
  console.log('Running at http://127.0.0.1:3001');
});