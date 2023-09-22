import { encryption, decryptionState } from "./";

export function storeToken(token, saveToLocal = false) {
  const encryptionToken = encryption(token);
  //this is the secretkey

  if (saveToLocal) {
    localStorage.setItem("ver", encryptionToken.secretKey);
    localStorage.setItem("token", encryptionToken.encryptedData);
  } else {
    sessionStorage.setItem("ver", encryptionToken.secretKey);
    sessionStorage.setItem("token", encryptionToken.encryptedData);
  }
}

export function updateToken(newToken) {
  if (localStorage.getItem("token") != null) {
    storeToken(newToken, true);
  } else {
    storeToken(newToken);
  }
}

export function getToken() {
  let token;

  if (localStorage.getItem("token") != null) {
    token = decryptionState(
      localStorage.getItem("token"),
      localStorage.getItem("ver")
    );

    return token;
  } else if (sessionStorage.getItem("token") != null) {
    token = decryptionState(
      sessionStorage.getItem("token"),
      sessionStorage.getItem("ver")
    );

    return token;
  } else {
    return null;
  }
}

export function deleteToken() {
  if (localStorage.getItem("token") != null) {
    localStorage.removeItem("token");
    localStorage.removeItem("ver");
  } else if (sessionStorage.getItem("token") != null) {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("ver");
  }
}
