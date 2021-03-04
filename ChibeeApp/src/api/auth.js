import http from './http';
export async function userLoginApi(data) {
  return http.post('/api/token', data);
}
export async function userSignUpApi(data) {
  return http.post('/api/users', data);
}
