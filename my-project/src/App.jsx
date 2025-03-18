import React from 'react';
import { IoMdMenu } from "react-icons/io";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';


const App = () => {
  return (
    <main className='overflow-x-hidden bg-white
    text-dark'>
      
      <Hero />
      <Services />
      <Banner />
    </main>
  );
};

export default App