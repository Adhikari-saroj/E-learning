import React from 'react'
import MidJpg from "/src/assets/MidJpg.jpg";
import {GrUserExpert} from 'react-icons/gr';
import {FaBookReader} from 'react-icons/fa';



const Banner = () => {
  return (
    <section>
        <div className="container py-14
        md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8
        space-y-6 md:space-y-0">
             <div className='flex justify-center items-center'>
                <img src={MidJpg} alt=""
                className='w-[350px] md:max-w-[450px]
                object-cover drop-shadow'
                />
             </div>
             <div className='flex flex-col justify-center'>
                <div className='text-center md:text-left
                space-y-12'>
                 <h1 className='text-3cl md:text-4xl font-bold
                 !leading-snug'>Tips to Setup A Successful E-learning Business
                 </h1>
                </div>
                <div className='flex flex-col gap-6'>
                    <div className='flex items-center gap-4 p-6
                    bg-[#f4f4f4] rounded-2xl hover:bg-white
                    duration-300 hover:shadow-2xl'>
                       <FaBookReader className='text-2xl' />
                       <p className='text-lg'>10,000 Courses</p>
                    </div>
                    <div className='flex items-center gap-4 p-6
                    bg-[#f4f4f4] rounded-2xl hover:bg-white
                    duration-300 hover:shadow-2xl'>
                       <GrUserExpert className='text-2xl' />
                       <p className='text-lg'>Expert instruction</p>
                    </div>
                </div>
             </div>
        </div>
    </section>
  )
}

export default Banner