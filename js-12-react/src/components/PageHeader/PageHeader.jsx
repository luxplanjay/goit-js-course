import React from 'react';
import PropTypes from 'prop-types';

// class PageHeader extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return <h2 className="black-text">{this.props.text}</h2>;
//   }
// }
//
// function PageHeader(props) {
//   return <h2 className="black-text">{props.text}</h2>;
// }

// const PageHeader = (props) => <h2 className="black-text">{props.text}</h2>;

const PageHeader = ({ text }) => <h2 className="black-text">{text}</h2>;

PageHeader.defaultProps = {
  text: 'Page Header'
};

PageHeader.propTypes = {
  text: PropTypes.string.isRequired
};

export default PageHeader;
