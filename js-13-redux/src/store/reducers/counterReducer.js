export default function (state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + action.payload;
    case 'SUB':
      return state - action.payload;
    default:
      return state;
  }
}
