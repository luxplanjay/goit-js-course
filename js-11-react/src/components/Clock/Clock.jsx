import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        time: new Date()
      });
    }, 1);
  }

  render() {
    return (
      <p>{JSON.stringify(this.state.time)}</p>
    );
  }
}

Clock.propTypes = {};

export default Clock;
