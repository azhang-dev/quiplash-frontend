export const API_ROOT = process.env.NODE_ENV === "production" ? "https://quiplash-clone-app.herokuapp.com" : "http://localhost:3000"

export const API_WS_ROOT = process.env.NODE_ENV === "production" ? "wss://quiplash-clone-app.herokuapp.com/cable" : "ws://localhost:3000/cable"
export const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};










