import WebSocket from 'ws';

import app from './app';

const ws = new WebSocket.Server({ port: 80 });
ws.addListener('connection', (wsInstance) => {
  wsInstance.addEventListener('message', (event) => {
    console.log(event);
  });
});

app.run();