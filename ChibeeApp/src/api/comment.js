import http from './http';
export async function getComments(id) {
  return http.get('/api/story-comment/' + id);
}

export async function addComment(data) {
  return http.post('/api/comment', data);
}

export async function replyComment(data) {
  return http.post('/api/addReply', data);
}

export async function getReplyComment(id) {
  return http.get('/api/reply-comment/' + id);
}

export async function deleteComment(id) {
  return http.delete('/api/comment/' + id);
}
