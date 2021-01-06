const user = {
  code: '0',
  message: '',
  data: {
    info: {
      name: 'xiebiao',
      age: 29,
    },
    permissions: ['list', 'note'],
    token:'3whek54fgrol'
  },
};

export default {
  'post|/login': () => {
    return user;
  },
};
