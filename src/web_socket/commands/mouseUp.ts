import robot from 'robotjs';

export default function mouseUp(step: number): void {
  const {x, y} = robot.getMousePos();
  robot.moveMouse(x, y - step);
}
