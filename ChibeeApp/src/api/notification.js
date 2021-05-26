import http from './http';
export async function getNotification(token) {
  return http.get('/api/noti/' + token);
}
