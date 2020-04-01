export default function messageReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_MESSAGE':
      return [...state, { ...action.message }];
    default:
      return state;
  }
}
