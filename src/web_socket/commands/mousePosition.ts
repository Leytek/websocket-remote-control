import robot from 'robotjs';

export interface IPoint {
  x: number;
  y: number;
}

export default function mousePosition(): IPoint {
  return robot.getMousePos();
}
