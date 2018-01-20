import { app } from '../setting';
/**
 * 给图片的uuid加前缀地址
 * $filter("addImgPrefix")(data)
 * */
export default function addImgPrefix(uuid, size) {
  if (!size) {
    size = '';
  }

  if (uuid) {
    if (uuid.indexOf('http') !== -1) {
      return uuid;
    } else {
      return app.resourceUrl + uuid + size;
    }
  }
}
