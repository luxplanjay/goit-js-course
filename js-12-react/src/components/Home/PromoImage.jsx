import React from 'react';
import image from './assets/cat.jpg';

const PromoImage = () => (
  <figure className="card-panel center-align z-depth-3">
    <img className="responsive-img" src={image}/>
    <figcaption className="flow-text">HypnoRoboCat O.O</figcaption>
  </figure>
);

PromoImage.propTypes = {};

export default PromoImage;
