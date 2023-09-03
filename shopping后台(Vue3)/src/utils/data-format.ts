import dayjs from 'dayjs';
//格式化时间
export function formatUtcToString(
  utcString: string,
  format = 'YYYY-MM-DD HH:mm'
) {
  const time = dayjs(utcString).format(format);
  return time;
}
//格式化图片路径
export function formatProcessUrl(url: string) {
  const startPos = url.indexOf('/image/');
  if (startPos !== -1) {
    return '.' + url.substring(startPos);
  }
  return url;
}
