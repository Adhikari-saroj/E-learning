import React from 'react'
import {FaInstagram, FaWhatsapp, FaYoutube, FaTwitter} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='py-28 bg-[#f7f7f7]'>
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2
            lg:grid-cols-3 gap-14 md:gap-4">
              <div className='space-y-4 max-w-[300px]'>
                <h1 className='text-2xl font-bold'>About Skillshare</h1>
                <p className='text-hard2'> I have an understanding that, 
                    even if the work <br/>is not perfect, 
                    it's a work in progress. 
                    And the reason <br/>why 
                    I'm on Skillshare
                    <br/> is to develop a skill. 
                    I feel that it's a safe space.
                    I come to Skillshare for the 
                    curation and class quality.<br/> 
                    That's really worth <br/>the cost of membership to me.
                    </p>
              </div>
              <div className='grid grid-cols-2 gap-10'>
                <div className='space-y-4'>
                <h1 className='text-2xl font-bold'>
                    Our Services 
                </h1>
                <div className='text-hard2'>
                    <ul className='space-y-2 text-lg'>
                        <li className='curson-pointer hover:text-secondary duration-200'>
                            SEO Job
                        </li>
                        <li className='curson-pointer hover:text-secondary duration-200'>
                            Managing Project
                        </li>
                        <li className='curson-pointer hover:text-secondary duration-200'>
                            Mobile Development 
                        </li>
                        <li className='curson-pointer hover:text-secondary duration-200'>
                           QA Job
                        </li>
                        <li className='curson-pointer hover:text-secondary duration-200'>
                            Web Development
                        </li>
                        <li className='curson-pointer hover:text-secondary duration-200'>
                            Cyber Security
                        </li>
                    </ul>
                </div>
                </div>
                <div>
                <div className='space-y-4'>
                <h1 className='text-2xl font-bold'>
                    Our Links
                </h1>
                <div className='text-hard2'>
                    <ul className='space-y-2 text-lg'>
                        <li className='curson-pointer hover:text-secondary duration-200'>
                            Job opportuniies
                        </li>
                        <li className='curson-pointer hover:text-secondary duration-200'>
                            Intranet
                        </li>
                        <li className='curson-pointer hover:text-secondary duration-200'>
                           media centre 
                        </li>
                        <li className='curson-pointer hover:text-secondary duration-200'>
                           people
                        </li>
                        <li className='curson-pointer hover:text-secondary duration-200'>
                            Research Portal
                        </li>
                        <li className='curson-pointer hover:text-secondary duration-200'>
                            Marketing
                        </li>
                    </ul>
                </div>
                </div>
                </div>
              </div>
              <div className='space-y-4 max-w-[300px]'>
                <h1 className='text-2xl font-bold'>Let's Connect</h1>
                <div className='flex space-x-6 py-3'>
                    <a href=''>
                        <FaWhatsapp className='cursor-pointer
                        hover:text-primary hover:scale-105 duration-200' />
                    </a>
                    <a href=''>
                        <FaYoutube className='cursor-pointer
                        hover:text-primary hover:scale-105 duration-200' />
                    </a>
                    <a href=''>
                        <FaInstagram className='cursor-pointer
                        hover:text-primary hover:scale-105 duration-200' />
                    </a>
                    <a href=''>
                        <FaTwitter className='cursor-pointer
                        hover:text-primary hover:scale-105 duration-200' />
                    </a>
                </div>
              </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer