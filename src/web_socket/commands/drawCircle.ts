import robot from 'robotjs';

export default function drawCircle(radius: number): void {
  const {x, y} = robot.getMousePos();
  const iterationCount = 200;

  robot.mouseToggle('down');

  for (let i = 0; i <= iterationCount; i++) {
    const newX = x + radius * Math.sin(i * (Math.PI * 2 / iterationCount));
    const newY = y + radius * (1 - Math.cos(i * (Math.PI * 2 / iterationCount)));
    robot.moveMouseSmooth(newX, newY, 200 / iterationCount);
  }
  robot.mouseToggle('up')
}
