const http = require('http');
const app = require('./app');

const port = 9000;
const server = http.createServer(app);

require('./db/config')

server.listen(port, () => {
    console.log("Server running on port ", port)
});