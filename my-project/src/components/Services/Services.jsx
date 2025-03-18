import React from 'react'
import {TbWorldWww} from 'react-icons/tb';
import {CiMobile3} from 'react-icons/ci';
import {RiComputerLine} from 'react-icons/ri';
import {IoPulseOutline} from 'react-icons/io5';

const ServicesData = [
{
    id:1,
    title:'Web Development',
    link:'#',
    icon:<TbWorldWww />,
    delay:0.2,
},
{
    id:2,
    title:'Mobile Development',
    link:'#',
    icon:<CiMobile3 />,
    delay:0.3,
},
{
    id:3,
    title:'software Development',
    link:'#',
    icon:<RiComputerLine />,
    delay:0.4,
},
{
    id:4,
    title:'Seo optiization',
    link:'#',
    icon:<IoPulseOutline />,
    delay:0.6, 
}
]

const Services = () => {
  return (
    <section className='bg-white'>
        <div className="container pb-14 pt-16">
            <h1 className='text-4xl font-bold text-left pb-10'>
            Services we provide
            </h1>
            <div className='grid grid-cols-2 sm:grid-cols-3
            md:grid-cols-4 gap-8'> 
               {
               ServicesData.map((service) => (
                <div className='bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center
                justify-center p-4 py-7 hover:bg-white
                hover:scale-110 duration-300 hover:shadow-2xl
                cursor-pointer'>
                 <div className='text-4xl mb-4'>{service.icon}</div>
                 <h1 className='text-lg font-semibold text-center px-3'>{service.title}</h1>
                </div>
              ))
               }
            </div>
        </div>
    </section>
  )
}

export default Services