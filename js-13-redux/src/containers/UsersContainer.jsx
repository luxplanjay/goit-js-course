import React from 'react';

import {connect} from 'react-redux';

import UserForm from '@/components/UserForm';
import UserList from '@/components/UserList';

import * as actions from '@/store/actions/userActions';

class UsersContainer extends React.Component {
  componentWillMount() {
    this.props.onGetUsers();
  }

  render() {
    return (
      <div>
        <UserForm onAdd={this.props.onAddUser} onFilter={this.props.onFilter}/>
        <UserList users={this.props.users}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users.filter(user => user.login.includes(state.userFilter))
});

const mapDispatchToProps = (dispatch) => ({
  onAddUser(user) {
    dispatch({
      type: 'ADD_USER',
      payload: user
    });
  },
  onFilter(val) {
    dispatch({
      type: 'FILTER_USERS',
      payload: val
    })
  },
  onGetUsers() {
    dispatch(actions.onGetUsers());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
