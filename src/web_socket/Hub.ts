import commands from './commands';

export default class Hub {
  private commandsMap: { [a: string]: string } = {
    mouse_up: 'mouseUp',
    mouse_down: 'mouseDown',
    mouse_left: 'mouseLeft',
    mouse_right: 'mouseRight',
    mouse_position: 'mousePosition',
    draw_rectangle: 'drawRectangle',
    draw_square: 'drawSquare',
    draw_circle: 'drawCircle',
    prnt_scrn: 'printScreen'
  }

  async call(command: string, arg1: number = 0, arg2: number = 0): Promise<string | null> {
    const result = await commands[this.commandsMap[command]](arg1, arg2);

    if (result === undefined)
      return null;
    if (typeof result === 'object')
      return `${result.x},${result.y}`;
    return result;
  }
}
