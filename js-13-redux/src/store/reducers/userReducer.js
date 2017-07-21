export default function (state = [], action) {
  switch (action.type) {
    case 'ADD_USER':
      return [...state, action.payload];
    case 'FETCH_USERS_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}
