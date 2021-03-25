import http from './http';
export async function userLoginApi(data) {
  return http.post('/api/login', data);
}
export async function userSignUpApi(data) {
  return http.post('/api/signUp', data);
}
