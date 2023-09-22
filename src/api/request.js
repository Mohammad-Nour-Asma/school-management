import { getToken } from "../hooks";

let token = getToken();

export function onFulfilledRequest(config) {
  if (token == null) {
    token = getToken();
  }
  //? Add token to request
  config.headers.Authorization = `Bearer ${token}`;

  return config;
}

export function onRejectedRequest(error) {
  return Promise.reject(error);
}
