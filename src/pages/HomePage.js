// import { Carousel } from 'bootstrap';
import Carousel from '../components/CarouselHomePage';
import ItemList from '../components/ItemList';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <ItemList />
    </div>
  )
}

export default HomePage;