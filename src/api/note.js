import request from '../utils/request';

export const getTreeData = () => request.get('/note/tree');