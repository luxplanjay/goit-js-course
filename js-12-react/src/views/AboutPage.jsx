import React from 'react';
import AboutNav from '@/components/About/AboutNav';
import AboutContent from '@/components/About/AboutContent';

import PageHeader from '@/components/PageHeader/PageHeader';

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <PageHeader text={'About Page'}/>
        <AboutNav match={this.props.match}/>
        <AboutContent match={this.props.match}/>
      </div>
    );
  }
}

export default AboutPage;
