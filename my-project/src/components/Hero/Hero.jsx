import React from 'react';
import Navbar from '../Navbar/Navbar';
import { IoIosArrowRoundForward } from 'react-icons/io';
import FrontJpg from "/src/assets/FrontJpg.jpg";
import {animate, motion} from 'framer-motion';


export const FadeUp = (delay) =>{
  return {
    initial:{
      opacity:0,
      y:50,
    },
     animate:{
        opacity:1,
        y:0,
        transition:{
          type:'spring',
          stiffnes:100,
          duration:0.5,
          delay:delay,
          ease:'easeInOut',
        },
      },
    };
  }

const Hero = () => {
  return (
    <section className='bg-light
    overflow-hidden relative'>
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[550px]">
        <div className='flex flex-col justify-center py-14
        md:py-0 relative z-20'>

          <div className='text-center md:text-left
          space-y-10 lg:max-w-[400px]'>
          <motion.h1 
           variants={FadeUp(0.6)}
           initial='initial'
           animate='animate'
            className='text-3xl lg:text-xl font-bold
          !leading-snug'>Everything You need 
          <br />
          to Get Started 
            with <span className='text-secondary'>ID and learning</span>
           </motion.h1>
           <div className='flex justify-center
           md:justify-start'>
           <motion.button 
            variants={FadeUp(0.6)}
            initial='initial'
            animate='animate'

           className='primary-btn flex items-center gap-2
           group'>
            <IoIosArrowRoundForward className='text-xl
            group-hover:translate-x-2 group-hover:rotate-45 duration-300' />
            Know More
            </motion.button>
           </div>
          </div>
         
        </div>
        <div className='flex justify-center
        items-center'>
          <motion.img 
          initial={{x:50, opacity:0}}
          animate={{x:0, opacity:1}}
          transition={{duration:0.6, delay:0.4, ease:'easeInOut'}}
          src={FrontJpg} alt="" className='w-[400px]
          xl:w-[400px] xl:w-[600px] relative z-10 drop-shadow' />
        </div>
      </div>
    </section>
  )
}

export default Hero