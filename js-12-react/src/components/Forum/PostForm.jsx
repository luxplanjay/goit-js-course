import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.nameInput.value !== '' && this.msgInput.value !== '') {

      this.props.onFormSubmit({
        id: uuid.v4(),
        name: this.nameInput.value,
        msg: this.msgInput.value,
        time: new Date().toLocaleDateString()
      });

      this.form.reset();
    } else {
      alert('plz enter stuff!');
    }
  }

  render() {
    return (
      <form className="card-panel z-depth-3" onSubmit={this.handleSubmit} ref={x => {this.form = x;}}>
        <label>
          Name
          <input type="text" ref={x => this.nameInput = x}/>
        </label>
        <textarea className="materialize-textarea" ref={x => {this.msgInput = x;}}/>
        <button type="submit" className="btn">Submit</button>
      </form>
    );
  }
}

PostForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired
};

export default PostForm;

