import robot from 'robotjs';

export default function drawRectangle(width: number, length: number): void {
  let {x, y} = robot.getMousePos();
  const devider = 5;

  robot.mouseToggle('down');

  for (let i = 0; i <= width / devider; i++) {
    robot.moveMouseSmooth(x + (i * devider), y, 1);
  }
  ({x, y} = robot.getMousePos());
  for (let i = 0; i <= length / devider; i++) {
    robot.moveMouseSmooth(x, y + (i  * devider), 1);
  }
  ({x, y} = robot.getMousePos());
  for (let i = 0; i <= width / devider; i++) {
    robot.moveMouseSmooth(x - (i  * devider), y, 1);
  }
  ({x, y} = robot.getMousePos());
  for (let i = 0; i <= length / devider; i++) {
    robot.moveMouseSmooth(x, y - (i  * devider), 1);
  }
  robot.mouseToggle('up')
}
