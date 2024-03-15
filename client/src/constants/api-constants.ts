export const wsEndpoint = (function() {
  if(process.env.NODE_ENV === "production") {
    const protocol = window.location.protocol.includes('https') ? 'wss': 'ws';
    return `${protocol}://${window.location.host}`;
  }
  return "ws://localhost:8080";
})();