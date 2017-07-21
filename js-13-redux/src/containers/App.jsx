import React from 'react';
import {connect} from 'react-redux';

import Counter from '@/components/Counter';
import UsersContainer from '@/containers/UsersContainer';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Counter
          value={this.props.counterValue}
          onAdd={this.props.onAdd}
          onSub={this.props.onSub}
        />
        <UsersContainer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counterValue: state.counter
});

const mapDispatchToProps = (dispatch) => ({
  onAdd() {
    dispatch({
      type: 'ADD',
      payload: 10
    });
  },
  onSub() {
    dispatch({
      type: 'SUB',
      payload: 10
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// function connect() {
//   return function {
//
//   }
// }
