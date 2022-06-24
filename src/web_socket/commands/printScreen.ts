import robot from 'robotjs';
import Jimp from 'jimp';

export default async function printScreen(): Promise<string> {
  const width = 80;
  const height = 80;
  const {x, y} = robot.getMousePos();
  const img = robot.screen.capture(x - width / 2, y - height / 2, width, height).image;
  const jimpImg = new Jimp({ data: img, width: width, height: height });
  console.log(jimpImg.getBase64Async(Jimp.MIME_PNG))
  return jimpImg.getBase64Async(Jimp.MIME_PNG);
}
