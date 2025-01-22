let IS_PROD=true;//make it false for production
const server= IS_PROD ?
  "https://linkupbackend-0d8d.onrender.com" :
  "http://localhost:8000"

  export default server;