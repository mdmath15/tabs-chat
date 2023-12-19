import axios from 'axios';

const EMOJI_API_KEY = '?access_key=709a7a3c60f0fd9ab21cb418ea767784521a795d';

const http = axios.create({
  baseURL: 'https://emoji-api.com',
});

export { http, EMOJI_API_KEY };
