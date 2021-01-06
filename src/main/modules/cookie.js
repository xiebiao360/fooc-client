import { session } from 'electron';
const setup = (ipc) => {
  /**
   * 获取cookie
   */
  ipc.on('cookie-get', (event, arg) => {
    const { url } = arg;
    session.defaultSession.cookies
      .get({ url })
      .then((cookies) => {
        event.reply('cookie-get-reply', {
          success: true,
          data: cookies,
          error: null,
        });
      })
      .catch((error) => {
        event.reply('cookie-get-reply', {
          success: false,
          data: null,
          error,
        });
      });
  });
  /**
   * 设置cookie
   */
  ipc.on('cookie-set', (event, arg) => {
    const { url, name, value, expirationDate } = arg;
    session.defaultSession.cookies
      .set({ url, name, value, expirationDate })
      .then(() => {
        event.reply('cookie-set-reply', { success: true, error: null });
      })
      .catch((error) => {
        event.reply('cookie-set-reply', { success: false, error });
      });
  });
  /**
   * 删除cookie
   */
  ipc.on('cookie-remove', (event, arg) => {
    const { url, name } = arg;
    session.defaultSession.cookies
      .remove(url, name)
      .then(() => {
        event.reply('cookie-remove-reply', { success: true, error: null });
      })
      .catch((error) => {
        event.reply('cookie-remove-reply', { success: false, error });
      });
  });
};

export default setup;
