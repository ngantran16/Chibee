import http from './http';
export async function getBooksApi() {
  return http.get('/api/books');
}
export async function getBookDetails(data) {
  return http.get('/api/books/' + data);
}

export async function getReviews() {
  return http.get('/api/reviews');
}
