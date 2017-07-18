import React from 'react';
import PageHeader from '@/components/PageHeader/PageHeader';
import image from './assets/404.png';

const PageNotFound = () => (
  <div className="center">
    <PageHeader text={'PAGE NOT FOUND!'}/>
    <img src={image} alt="404 image"/>
  </div>
);

export default PageNotFound;
