let BASE_URL = '';
let TIME_OUT = 10000;
if (process.env.NODE_ENV == 'development') {
  BASE_URL = '/api';
  TIME_OUT = 10000;
} else if (process.env.NODE_ENV == 'production') {
  BASE_URL = 'test';
  TIME_OUT = 10000;
} else {
  BASE_URL = 'test';
  TIME_OUT = 10000;
}
export { BASE_URL, TIME_OUT };
