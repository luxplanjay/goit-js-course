import React from 'react';

class RegForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: [1, 2, 3, 4],
      data: [],
      isToggled: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleSubmit() {
    const userInfo = {
      login: this.loginInput.value,
      pass: this.passInput.value
    };

    // this.setState();

  }

  componentDidUpdate() {
    console.log('UPDATED!');
    console.log(this.state);
  }

  handleClick() {
    console.log('CLICK!');
  }

  componentDidMount() {
    console.log('JUST MOUNTED!');

    fetch('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=5b88481e2156441382975efd19981185')
      .then(response => response.json())
      .then(apiResponse => {
        this.setState({
          data: apiResponse.articles
        })
      });
  }

  componentWillUnmount() {

  }

  handleToggle() {
    this.setState(prevState => {
      return {
        isToggled: !prevState.isToggled
      };
    });
  }

  // handleToggle() {
  //   this.setState(prevState => ({
  //       isToggled: !prevState.isToggled
  //   }));
  // }

  render() {
    return (
      <div>
        <form action="#" onSubmit={this.handleSubmit}>
          <input type="text" ref={item => {
            this.loginInput = item;
          }}/>
          <input type="password" ref={item => {
            this.passInput = item;
          }}/>
          <button type="submit" onClick={this.handleClick}>submit</button>
        </form>
        <p>{JSON.stringify(this.state.userData)}</p>
        <button onClick={this.handleToggle}>Toggle</button>
        <p>{this.state.isToggled ? 'ON' : 'OFF'}</p>
      </div>
    );
  }
}

export default RegForm;
