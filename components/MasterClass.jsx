import React from 'react'
import Button from './Button'
import Forms from "../assests/Form"
import Image from 'next/image'
import Mockupscg from "../assests/Images/Mockupscg.svg"

const MasterClass = () => {
  return (
    <div className='bg-[#1A1B1C] '>
        <div className='text-center '>
        <h1 className='font-bold text-[48px] leading-[66px] py-4 text-[#FFFFFF]' >
    Masterclasses
      </h1>
      <p className='font-medium text-lg text-[#999CA0] leading-[27px] '>Host livestreams with an unlimited number of attendees. <br/>
Answer their questions in live with our proprietary Q&A filtering module.  </p>
    </div>
    <div className=' flex  md:flex-row-reverse flex-col-reverse justify-center items-center md:px-0 px-4 md:justify-center gap-9 mt-8'>
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
        <h1 className='font-bold text-[22px] leading-[30px]'>Create your event</h1>
        <p className='font-normal text-base text-[#999CA0]'>Choose content, date, length and <br/> price. Let your followers know</p>
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
 <div className='flex justify-center  py-10 '>
       <Button label="Get Started For Free" />
    </div>
    </div>
  )
}

export default MasterClass