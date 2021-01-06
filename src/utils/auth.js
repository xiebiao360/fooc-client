import { ipcRenderer } from 'electron';

const TokenKey = 'Auth-Token';
const url = 'http://localhost:8082';

export function getToken() {
  return new Promise((resolve, reject) => {
    ipcRenderer.once('cookie-get-reply', (event, arg) => {
      const { success, data, error } = arg;
      if (success) {
        const cookie = data.find((f) => f.name === TokenKey);
        return resolve(cookie);
      } else {
        console.log(error);
        return reject(error);
      }
    });
    ipcRenderer.send('cookie-get', { url });
  });
}

export function setToken(token, expires) {
  return new Promise((resolve, reject) => {
    ipcRenderer.once('cookie-set-reply', (event, arg) => {
      const { success, error } = arg;
      return success ? resolve() : reject(error);
    });

    let t = new Date();
    t.setDate(t.getDate() + expires);
    ipcRenderer.send('cookie-set', {
      url,
      name: TokenKey,
      value: token,
      expirationDate: Math.round(t / 1000),
    });
  });
}

export function removeToken() {
  return new Promise((resolve, reject) => {
    ipcRenderer.once('cookie-remove-reply', (event, arg) => {
      const { success, error } = arg;
      return success ? resolve() : reject(error);
    });
    ipcRenderer.send('cookie-remove-reply', { url, name: TokenKey });
  });
}
