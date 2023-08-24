import dayjs from 'dayjs';
export function formatUtcToString(
  utcString: string,
  format = 'YYYY-MM-DD HH:mm'
) {
  const time = dayjs(utcString).format(format);
  return time;
}
