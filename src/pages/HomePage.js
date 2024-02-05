// import { Carousel } from 'bootstrap';
import Carousel from '../components/CarouselHomePage';
import ItemList from '../components/ItemList';
import ComponentTitle from '../components/ComponentTitle';
import ComponentButton from '../components/ComponentButton';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <ComponentTitle title="Populiariausi batutai"/>
      <ItemList />
      <ComponentButton title="Rezervuoti"/>
    </div>
  )
}

export default HomePage;