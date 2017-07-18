import React from 'react';

import PageHeader from './PageHeader';
import List from './List/List';
import Avatar from './Avatar/Avatar';
import RegForm from './RegForm/RegForm';
import Clock from './Clock/Clock';

class App extends React.Component {
  render() {
    return (
      <div>
        <PageHeader text={'Hello'} />
        <List items={['first', 'second', 'third', 1, 2, 3, 4]}/>
        <Avatar url={'http://www.gore-tex.com/blog/app/themes/eublog/theme/assets/img-eublog/avatar.jpg'}/>
        <Avatar name={'Chelsey'} url={'http://rotarymeansbusiness.com/wp-content/uploads/avatar-female.png'}/>
        <RegForm/>
        <Clock/>
      </div>
    );
  }
}



export default App;
