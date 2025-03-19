import React from 'react'
import FooterJpg from "/src/assets/FooterJpg.jpg";

const Banner2 = () => {
 return (
     <section>
         <div className="container py-14
         md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8
         space-y-6 md:space-y-0">
             <div className='flex flex-col justify-center'>
                 
                    <div className='text-center md:text-left
                 space-y-4 lg:max-w-[450px]'>
                    <h1 className='text-3cl md:text-4xl font-bold
                  !leading-snug'>Join Community to start the E-learning Business</h1>
                  <p className='text-hard2'>One of the main advantages of e-learning is convenience, in that it enables an individual to access learning material at any time and from any place.</p>
                  <a href="" className='primary-btn'>Let's Join</a>
                    </div>
              </div>
              <div className='flex justify-center items-center'>
                 <img src={FooterJpg} alt=""
                 className='w-[350px] md:max-w-[450px]
                 object-cover drop-shadow'
                 />
              </div>
             
         </div>
     </section>
   )
}

export default Banner2