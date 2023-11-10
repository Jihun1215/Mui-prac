import axios from "axios";

// axios 요청이 들어가는 모든 모듈
export const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

// export const login = () => {};
