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
