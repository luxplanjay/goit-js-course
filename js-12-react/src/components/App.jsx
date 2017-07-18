import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import HomePage from '@/views/HomePage';
import ForumPage from '@/views/ForumPage';
import GalleryPage from '@/views/GalleryPage';
import AboutPage from '@/views/AboutPage';
import ErrorPage from '@/views/ErrorPage';
import Nav from '@/components/Nav';

const Test = () => <h1>TEST</h1>;

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Nav/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/forum" component={ForumPage}/>
        <Route path="/gallery" component={GalleryPage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/test" component={Test}/>
        <Route component={ErrorPage}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;


