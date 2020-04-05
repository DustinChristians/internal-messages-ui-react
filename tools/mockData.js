const messages = [
  {
    id: 1,
    userId: 1,
    text: 'At vero eos et accusamus',
    channelId: 1,
    createdOn: '2012-04-23T18:25:43.511Z',
  },
  {
    id: 2,
    userId: 2,
    text: 'Nam libero tempore',
    channelId: 1,
    createdOn: '2012-04-23T18:25:43.511Z',
  },
  {
    id: 3,
    userId: 3,
    text: 'rerum necessitatibus saepe',
    channelId: 1,
    createdOn: '2012-04-23T18:25:43.511Z',
  },
  {
    id: 4,
    userId: 1,
    text:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
    channelId: 1,
    createdOn: '2012-04-23T18:25:43.511Z',
  },
  {
    id: 5,
    userId: 1,
    text: 'Culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
    channelId: 1,
    createdOn: '2012-04-23T18:25:43.511Z',
  },
  {
    id: 6,
    userId: 2,
    text: 'Lorem ipsum dolor sit amet',
    channelId: 1,
    createdOn: '2012-04-23T18:25:43.511Z',
  },
  {
    id: 7,
    userId: 3,
    text: 'Excepteur sint occaecat cupidatat non proident',
    channelId: 1,
    createdOn: '2012-04-23T18:25:43.511Z',
  },
  {
    id: 8,
    userId: 3,
    text: 'sunt in culpa qui officia deserunt mollit anim id est laborum',
    channelId: 1,
    createdOn: '2012-04-23T18:25:43.511Z',
  },
  {
    id: 9,
    userId: 1,
    text: 'exercitation ullamco laboris nisi',
    channelId: 1,
    createdOn: '2012-04-23T18:25:43.511Z',
  },
  {
    id: 10,
    userId: 2,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    channelId: 1,
    createdOn: '2012-04-23T18:25:43.511Z',
  },
];

const users = [
  { id: 1, firstName: 'Bob', lastName: 'Smith' },
  { id: 2, firstName: 'Mary', lastName: 'Jones' },
  { id: 3, firstName: 'Ted', lastName: 'Miller' },
];

const newMessage = {
  id: null,
  text: '',
  channelId: null,
  createdOn: '',
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newMessage,
  messages,
  users,
};
