import WebSocket, { WebSocketServer } from 'ws';

export const createWebSocketServer = (server: any) => {
  const wss = new WebSocketServer({ server });

  wss.on('connection', function connection(ws) {
    ws.on('error', console.error);

    ws.on('message', function message(data, isBinary) {
      wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(data, { binary: isBinary });
        }
      });
    });
  });
}