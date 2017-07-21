export const onGetUsers = () => (dispatch) => {
  console.log('qweqwe');
  fetch('https://api.myjson.com/bins/1ajnvr')
    .then(response => response.json())
    .then(users => {
      dispatch({
        type: 'FETCH_USERS_SUCCESS',
        payload: users
      });
    });
};
