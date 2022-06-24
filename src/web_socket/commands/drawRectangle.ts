import robot from 'robotjs';

export default function drawRectangle(width: number, length: number): void {
  let {x, y} = robot.getMousePos();
  const divider = 5;

  robot.mouseToggle('down');

  for (let i = 0; i <= width / divider; i++) {
    robot.moveMouseSmooth(x + (i * divider), y, 1);
  }
  ({x, y} = robot.getMousePos());
  for (let i = 0; i <= length / divider; i++) {
    robot.moveMouseSmooth(x, y + (i  * divider), 1);
  }
  ({x, y} = robot.getMousePos());
  for (let i = 0; i <= width / divider; i++) {
    robot.moveMouseSmooth(x - (i  * divider), y, 1);
  }
  ({x, y} = robot.getMousePos());
  for (let i = 0; i <= length / divider; i++) {
    robot.moveMouseSmooth(x, y - (i  * divider), 1);
  }
  robot.mouseToggle('up')
}
