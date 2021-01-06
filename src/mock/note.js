const treedata = {
  code: '0',
  message: '',
  data: [
    {
      title: '1',
      key: '1',
      children: [
        {
          title: '1-1',
          key: '1-1',
          children: [
            {
              title: '1-1-1',
              key: '1-1-1',
              isLeaf: true,
            },
          ],
        },
      ],
    },
    {
      title: '2',
      key: '2',
      children: [
        {
          title: '2-1',
          key: '2-1',
          children: [
            {
              title: '2-1-1',
              key: '2-1-1',
              isLeaf: true,
            },
          ],
        },
      ],
    },
  ],
};
export default {
  'get|/note/tree': () => {
    return treedata;
  },
};
