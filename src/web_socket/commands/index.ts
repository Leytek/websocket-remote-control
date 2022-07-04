import mouseUp from './mouseUp';
import mouseDown from './mouseDown';
import mouseLeft from './mouseLeft';
import mouseRight from './mouseRight';
import mousePosition, { IPoint } from './mousePosition';
import drawRectangle from './drawRectangle';
import drawSquare from './drawSquare';
import drawCircle from './drawCircle';
import printScreen from './printScreen';

const commands: { [a: string]: (a: number, b: number) => void | IPoint | Promise<string> } = {
  mouseUp,
  mouseDown,
  mouseLeft,
  mouseRight,
  mousePosition,
  drawRectangle,
  drawSquare,
  drawCircle,
  printScreen
};

export default commands;
