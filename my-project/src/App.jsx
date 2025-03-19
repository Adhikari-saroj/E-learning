import React from 'react';
import { IoMdMenu } from "react-icons/io";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Banner2 from './components/Banner2/Banner2';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <main className='overflow-x-hidden bg-white
    text-dark'>
      
      <Hero />
      <Services />
      <Banner />
      <Banner2 />
       <Footer />
    </main>
  );
};

export default App