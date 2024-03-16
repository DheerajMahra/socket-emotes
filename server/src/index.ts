import http from 'http';
import path from 'path';
import express from 'express';
import { createWebSocketServer } from './websocket';

const app = express();
const server = http.createServer(app);

createWebSocketServer(server);

// Serve client static files
app.use(express.static(path.join(__dirname, '../../client/dist')));

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});