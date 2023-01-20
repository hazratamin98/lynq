import React from 'react'
import {Button} from "../components"
import LiveCall from "../assests/LiveCall"

const Hero = () => {
  return (
    <div className='flex flex-col items-center'>
    <div className='  flex-col text-center space-y-6 '>
      <h1 className='font-bold text-[55px] leading-[66px] center mt-40  text-[#FFFFFF]' >
       Your own video platform to <br/> 
       <span  className=" relative before:block before:absolute before:inset-5 before:mt-6 before:py-4   before:bg-[#5A27E7]">
    <span className="relative text-white">  monetize your expertise</span>
  </span>
     
      </h1>
      <p className='font-medium text-lg text-[#999CA0] leading-[27px] '  >Lynq provides an all-in-one white label solution to manage and offer paid <br/> video-based one-on-ones and masterclasses to your followers.</p>
    <Button label="Get Start for Free"/>
    </div>
 
    {/* <div className='max-w-[1184px] max-h-[819px min-w[489px] min-h-[281px] '> <LiveCall/></div> */}
     
   
   

      <div className='  flex-col text-center space-y-6 '>
      <h1 className='font-bold text-[38px] leading-[66px]  text-[#FFFFFF]' >
     Selling expertise and interaction with your <br/> audience is
      <span  className=" relative before:block before:absolute before:inset-5 before:mt-4 before:py-4    before:bg-[#5A27E7]">
    <span className="relative text-white">  your next big source of revenue</span>
  </span>
     
      </h1>
      <p className='font-medium text-lg text-[#999CA0] leading-[27px] '>Let Lynq helps you launch your own expertise video channel</p>
    <Button label="Launch Your Expertise Channel For Free"/>
    </div>
    </div>
    
  )
}

export default Hero