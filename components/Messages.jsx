import React from 'react'
import Button from './Button'
import Forms from "../assests/Form"
import Image from 'next/image'
import Mockupscg from "../assests/Images/Mockupscg.svg"

const Messages = () => {
  return (
    <div className=''>
        <div className='text-center '>
        <h1 className='font-bold text-[48px] leading-[66px]  text-[#FFFFFF]' >
    Messages
      </h1>
      <p className='font-medium text-lg text-[#999CA0] leading-[27px] '>Send a personal video answer to your followers’ question </p>
    </div>
    <div className=' flex  md:flex-row flex-col-reverse justify-center items-center md:px-0 px-4 md:justify-center gap-9 mt-8'>
    <div className='max-w-[600px] max-h-[400px]'>
     <Image src={Mockupscg} alt="Mockupscg" />
  </div>
    <div className='flex flex-col gap-6'>
       <div class="flex items-start gap-5 ">
      <div>
         <span  className='w-[48px] h-[48px] flex justify-center items-center rounded-full  font-bold text-2xl text-[#5A27E7] border-[#5A27E7] border-solid border-[1px]  text-center  '>1</span>
      <div className='border-[#393B3F] border-dashed border-[2px]  rotate-90 mt-6 '/>
      </div>
     
      <div>
        <h1 className='font-bold text-[22px] leading-[30px]'>Pick up your schedule</h1>
        <p className='font-normal text-base text-[#999CA0]'>Manage your availability and synchronize your <br/> calendars. Booking happens only when you are free</p>
      </div>
  
     </div>
      <div class="flex items-start gap-5 ">
      <div>
         <span  className='w-[48px] h-[48px] flex justify-center items-center rounded-full  font-bold text-2xl text-[#5A27E7] border-[#5A27E7] border-solid border-[1px]  text-center  '>2</span>
      <div className='border-[#393B3F] border-dashed border-[2px]  rotate-90 mt-6 '/>
      </div>
     
      <div>
        <h1 className='font-bold text-[22px] leading-[30px]'>Set up length and rates</h1>
        <p className='font-normal text-base text-[#999CA0]'>Lynq collects payment for you</p>
      </div>
  
     </div>
      <div class="flex items-start gap-5 ">
      <div>
         <span  className='w-[48px] h-[48px] flex justify-center items-center rounded-full  font-bold text-2xl text-[#5A27E7] border-[#5A27E7] border-solid border-[1px]  text-center  '>3</span>
      <div className='border-[#393B3F] border-dashed border-[2px]  rotate-90 mt-6 '/>
      </div>
     
      <div>
        <h1 className='font-bold text-[22px] leading-[30px]'>Make video call</h1>
        <p className='font-normal text-base text-[#999CA0]'>No install needed, everything <br/> happens in your browser</p>
      </div>
  
     </div>
      <div class="flex items-start gap-5 ">
      <div>
         <span  className='w-[48px] h-[48px] flex justify-center items-center rounded-full  font-bold text-2xl text-[#5A27E7] border-[#5A27E7] border-solid border-[1px]  text-center  '>4</span>
      {/* <div className='border-[#393B3F] border-dashed border-[2px]  rotate-90 mt-6 '/> */}
      </div>
     
      <div>
        <h1 className='font-bold text-[22px] leading-[30px]'>Analyze and improve</h1>
        <p className='font-normal text-base text-[#999CA0]'>Get profound insights into your best performing options <br/> and the most active clients</p>
      </div>
  
     </div>
    </div>
    
     

     
  
    </div>
    <div className='flex justify-center mt-20 py-10'>
       <Button label="Get Started For Free" />
    </div>
    </div>
  )
}

export default Messages