export async function sendRequest(url, options) {
  const response = await fetch(url, { ...options });
  return await response.json();
}
