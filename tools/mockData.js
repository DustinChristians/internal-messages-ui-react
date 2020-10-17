const messages = [
  {
    user: 'Bob',
    datetime: '10/17/2020 3:20:29 PM',
    text: 'At vero eos et accusamus',
  },
  {
    user: 'Bill',
    datetime: '10/17/2020 3:20:54 PM',
    text: 'Nam libero tempore',
  },
  {
    user: 'Bob',
    datetime: '10/17/2020 3:21:05 PM',
    text: 'rerum necessitatibus saepe',
  },
];

const newMessage = {
  id: null,
  text: '',
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  messages,
  newMessage,
};
