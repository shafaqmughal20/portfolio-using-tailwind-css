import React from 'react'
import { TbMenu2 } from "react-icons/tb";

  const Navbar =() => {
    return (
        <div className='container pt-8'>
            <div className='flex justify between item center'>
                <div className='text-xl font-medium'>Shafaq </div>

                <ul className='gap-10 lg:gap-16 hidden md:flex'>

                    <li className=' menuLink'><a href='#hero'>Home</a></li>
                    <li className=' menuLink'><a href='#about'>About</a></li>
                    <li className=' menuLink'><a href='#projects'>Projects</a></li>
                    <li className=' menuLink'><a href='#skills'>Skills</a></li>
                    <li className=' menuLink'><a href='#contact'></a>Contact</li>
                    

                </ul>
                <TbMenu2 className='md:hidden' size={30} />
            </div>

        </div>
    )
}
export default   Navbar
