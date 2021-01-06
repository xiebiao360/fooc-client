import cookieSetup from './modules/cookie';
/**
 * 安装功能支持
 * @param {*} ipc
 */
export const customSetup = (ipc) => {
  cookieSetup(ipc);
};
