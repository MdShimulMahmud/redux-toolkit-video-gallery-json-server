const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db_videos.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 9000; //  chose port from here like 8080, 3001

server.use(middlewares);
server.use(router);

server.listen(port);
