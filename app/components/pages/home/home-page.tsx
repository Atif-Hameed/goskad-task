import React from 'react'
import Hero from './hero';
import Solutions from './solutions';
import GlobalScale from './global-scale';
import Services from './services';
import Footer from '../../layout/footer/footer';
import Launch from './launch';
import Enterprise from './enterprise';

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Solutions/>
      <div className='bg-cgreen'>
      <GlobalScale/>
      </div>
      <Services/>
      <Enterprise/>
      <Launch/>
      <Footer/>
    </div>
  )
}

export default HomePage;
