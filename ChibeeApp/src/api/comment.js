import http from './http';
export async function getComments(id) {
  return http.get('/api/story-comment/' + id);
}

export async function addComment(data) {
  return http.post('/api/comment', data);
}