import React from 'react';
import {Switch, Route} from 'react-router-dom';

import AboutItem from './AboutArticle';

import Home from '@/components/Home/PromoImage';

const AboutContent = ({match}) => (
  <div>
    <Switch>
      <Route exact path={`${match.url}/team`} component={AboutItem}/>
      <Route exact path={`${match.url}/company`} component={AboutItem}/>
      <Route exact path={`${match.url}/contacts`} component={Home}/>
    </Switch>
  </div>
);

export default AboutContent;
