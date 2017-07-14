import React from 'react';
import PropTypes from 'prop-types';

class Avatar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <figure>
        <img src={this.props.url} alt=""/>
        <figcaption>{this.props.name}</figcaption>
      </figure>
    );
  }
}

Avatar.defaultProps = {
  name: 'User'
};

Avatar.propTypes = {
  name: PropTypes.string.isRequired
};

export default Avatar;
