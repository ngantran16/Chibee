import http from './http';
export async function getStoriesApi() {
  return http.get('/api/stories');
}
export async function getStoryDetails(data) {
  return http.get('/api/stories/' + data);
}

export async function getReviews() {
  return http.get('/api/reviews');
}

export async function getTypesApi() {
  return http.get('/api/type');
}

export async function getDetailStories(id) {
  return http.get('/api/stories/' + id);
}

export async function rating(data) {
  return http.post('/api/rate', data);
}
