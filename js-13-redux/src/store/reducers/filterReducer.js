export default function (state = '', action) {
  switch (action.type) {
    case 'FILTER_USERS':
      return action.payload;
    default:
      return state;
  }
}
