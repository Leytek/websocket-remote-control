import { Transform } from 'stream'
import { WebSocketServer, WebSocket, createWebSocketStream } from 'ws';
import parseCommand from './parseCommand';
import Hub from './Hub'

export default class WebSocketApp {
  #wsServer;

  constructor(port: number) {
    this.#wsServer = new WebSocketServer({port: port});
  }

  run() {
    this.#wsServer.on('connection', this.#handleConnection);
    this.#wsServer.on('close', () => console.log('Closing connection...'));
    process.on('SIGINT', () => {
      this.#wsServer.close();
      process.exit();
    });
  }

  #handleConnection(ws: WebSocket) {
    const wsStream = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });
    const commandHub = new Hub();

    const handlingStream = new Transform({
      encoding: 'utf8',
      transform: async (chunk, encoding, callback) => {
        const { command, arg1, arg2 } = parseCommand(chunk.toString());
        const result = await commandHub.call(command, arg1, arg2);
        callback(null, `${command} ${result}`);
      }
    });

    wsStream.pipe(handlingStream).pipe(wsStream);
    ws.send('connected');
  }
}
