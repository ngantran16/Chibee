import http from './http';
export async function wishlistApi(token) {
  return http.get('/api/wishlist/' + token);
}

export async function addToWishlist(data) {
  return http.post('/api/wishlist', data);
}
