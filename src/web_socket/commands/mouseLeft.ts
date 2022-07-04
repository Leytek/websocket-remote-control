import robot from 'robotjs';

export default function mouseLeft(step: number): void {
  const {x, y} = robot.getMousePos();
  robot.moveMouse(x - step, y);
}
