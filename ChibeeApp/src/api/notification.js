import http from './http';
export async function getNotification(token) {
  return http.get('/api/noti/' + token);
}

export async function getAllUser() {
  return http.get('/api/admin/user');
}
