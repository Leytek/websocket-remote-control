import {httpServer} from './src/http_server';
import WebSocketApp from './src/web_socket/WebSocket';

const HTTP_PORT = 3000;
const ws = new WebSocketApp();
ws.run();

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);
