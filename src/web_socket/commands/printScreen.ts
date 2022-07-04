import robot from 'robotjs';
import Jimp from 'jimp';

function screenCaptureToJimp(robotScreenPic: robot.Bitmap): Promise<Jimp> {
  return new Promise((resolve, reject) => {
    try {
      const image = new Jimp(robotScreenPic.width, robotScreenPic.height);
      let pos = 0;
      image.scan(0, 0, image.bitmap.width, image.bitmap.height, (x, y, idx) => {
        image.bitmap.data[idx + 2] = robotScreenPic.image.readUInt8(pos++);
        image.bitmap.data[idx + 1] = robotScreenPic.image.readUInt8(pos++);
        image.bitmap.data[idx + 0] = robotScreenPic.image.readUInt8(pos++);
        image.bitmap.data[idx + 3] = robotScreenPic.image.readUInt8(pos++);
      });
      resolve(image);
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
}

export default async function printScreen(): Promise<string> {
  const width = 200;
  const height = 200;
  const {x, y} = robot.getMousePos();
  const bitmap = robot.screen.capture(x - width / 2, y - height / 2, width, height);
  const jimpImg = await screenCaptureToJimp(bitmap);
  return (await jimpImg.getBufferAsync(Jimp.MIME_PNG)).toString('base64');
}
