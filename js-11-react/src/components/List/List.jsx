import React from 'react';
import uuid from 'uuid';

import './styles.scss';

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let listItems = this.props.items.map(item => {
      return <li key={uuid.v4()} className="List-item">{item}</li>;
    });

    return (
      <ul className="List">
        {listItems}
      </ul>
    );
  }
}


export default List;

