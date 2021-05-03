import http from './http';
export async function wishlistApi(token) {
  return http.get('/api/wishlist/' + token);
}

