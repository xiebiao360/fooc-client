import request from '../utils/request';

export const login = ({ name, password, verifycode }) =>
  request.post('/login', { name, password, verifycode });
