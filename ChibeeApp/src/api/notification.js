import http from './http';
export async function getNotification(token) {
  return http.get('/api/noti/' + token);
}

export async function getAllUser(data) {
  return http.post('/api/inviter', data);
}

export async function inviteUser(data) {
  return http.post('/api/noti', data);
}
