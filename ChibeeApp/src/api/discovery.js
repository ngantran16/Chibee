import http from './http';
export async function getDiscovery() {
  return http.get('/api/discovery');
}

export async function getDetailDiscovery(id) {
  return http.get('/api/discovery/' + id);
}
