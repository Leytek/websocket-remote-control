import robot from 'robotjs';

export default function mouseRight(step: number): void {
  const {x, y} = robot.getMousePos();
  robot.moveMouse(x + step, y);
}
