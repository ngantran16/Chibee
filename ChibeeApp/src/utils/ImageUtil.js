export function imageUtil(url) {
  if (url) {
    if (url.includes('https://') || url.includes('http://')) {
      return url;
    }
    return `https://${url}`;
  }
  return undefined;
}
