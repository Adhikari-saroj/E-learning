import React from 'react';
import { IoMdMenu } from "react-icons/io";

const NavbarMenu = [
{
    id:1,
    title:'Home',
    link:'#'
},
{
    id:2,
    title:'About Us',
    link:'#'
},
{
    id:3,
    title:'Services',
    link:'#'
},
{
    id:4,
    title:'Testimonials',
    link:'#'
},
{
    id:5,
    title:'Contact Us',
    link:'#'
},
]
const Navbar = () => {
  return (
    <nav>
        <div className="container py-10 flex justify-between
        items-center">
            <div>
                <h1 className='font-bold text-2xl'>
                    Skillshare </h1>
            </div>

            <div className='hidden lg:block'>
              <ul className='flex items-center gap-3'>
                {
                 NavbarMenu.map((menu) => (
                    <li key={menu.id}>
                        <a href={menu.path}
                        className='inline-block py-2 px-3
                        hover:text-secondary relative group'
                        >
                        <div className='w-2 h-2 bg-secondary absolute mt-2 rounded-fullleft-1/2 -translate-x-1/2
                        top-1/2 bottom-0 group-hover:block hidden'></div>
                        {menu.title}</a>
                    </li>
                ))}
                <button className='primary-btn'>Sign In</button>
              </ul>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;