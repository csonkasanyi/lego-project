import React from 'react';
import './App.css';
import Carousel from 'react-material-ui-carousel';
import ResponsiveAppBar from './components/ResponsiveAppBar';

const App = () => {
  const items = [
   'images/01.jpg',
   'images/02.jpg',
   'images/03.jpg',
   'images/04.jpg',
   'images/05.jpg',
  ]

  return (
    <>
      <ResponsiveAppBar />
      <div className="App">
        <h1>Üdvözöllek oldalamon!</h1>
        <Carousel>
          {items.map((image) => <img src={image} className='imgFluid' key={image}/> )}
        </Carousel>
      </div>
    </>
  );
}

export default App;
