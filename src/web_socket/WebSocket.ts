import {Transform} from 'stream'
import {WebSocketServer, WebSocket, createWebSocketStream} from 'ws';
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
  }

  #handleConnection(wsClient: WebSocket) {
    const wsStream = createWebSocketStream(wsClient, {encoding: 'utf8'});
    const commandHub = new Hub();

    const handlingStream = new Transform({
      transform: async (chunk, encoding, callback) => {
        const { command, arg1, arg2 } = parseCommand(chunk.toString());
        const result = await commandHub.call(command, arg1, arg2);
        wsClient.send(`${command} ${result}`);
        callback();
      }
    });

    wsStream.pipe(handlingStream);
    wsClient.send('connected');
  }
}
