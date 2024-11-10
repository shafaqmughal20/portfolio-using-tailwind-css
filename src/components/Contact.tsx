
import React from 'react'
import { ImMail } from "react-icons/im";
import { BsTelephoneForwardFill } from "react-icons/bs";



const Contact = () => {
    return (

        <div id='contact' className='pt-32 container'>
            <div className ='grid md:grid-cols-2 gap-10'>
              <div className ='space-y-8'>
                <h2 className='text-5xl' data-aos="zoom-out-down"> Contact </h2>
                <p className ='text-grey-600 text-[18px] pt-2 data-aos="zoom-out-down"'>
               Feel free to reach out to me at the provided Number and Mail</p>
               <div className='flex gap-3 items-center' data-aos="zoom-out-down">
                < ImMail size={30}/> shafaqaslam09@gmail.com
               </div>
               <div className='flex gap-3 items-center' data-aos="zoom-out-down">
                <BsTelephoneForwardFill  size={30} /> 0336-3836759
               </div>
                </div>
                <div className='space-y-8'>
                <div className='flex flex-col gap-1' data-aos="zoom-out-down">
                    <label htmlFor='name'>Name</label>
                    <input type='text' className='h-[40px] bg-transparent border border-yellow-600' id='name'/>

                </div>

                <div className='flex flex-col gap-1' data-aos="zoom-out-down">
                    <label htmlFor='email'>Email</label>
                    <input type-text className='h-[40px] bg-transparent border border-yellow-600' id='email'/>

                </div>
                <div className='flex flex-col gap-1'  data-aos="zoom-out-down">
                    <label htmlFor='message'>Message</label>
                    < textarea className=' bg-transparent border border-yellow-600' id='message' rows={8}></textarea>

                </div>
                
                <button className='bg-yellow-600 p-2 px-6'> Send</button>
                </div>
                </div>
                </div>

        
        
        )
        }
        export default Contact