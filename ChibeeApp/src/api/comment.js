import http from './http';
export async function getComments(id) {
  return http.get('/api/story-comment/' + id);
}