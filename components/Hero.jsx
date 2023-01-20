import React from 'react'
import {Button} from "../components"
import Mouckupp from "../assests/Images/Mockupp.svg"
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex flex-col items-center'>
    <div className='  flex-col text-center space-y-6 '>
      <h1 className='font-bold md:text-[55px] text-[38px] md:leading-[66px] leading-[38px] center mt-40 inline-block text-[#FFFFFF]' >
       Your own video platform to <br/> 
       <span  className=" relative before:block before:absolute before:inset-5 md:before:mt-6 before:py-4   before:bg-[#5A27E7]">
    <span className="relative text-white">  monetize your expertise</span>
  </span>
     
      </h1>
      <p className='md:font-medium font-normal  md:text-lg text-base text-[#999CA0] md:leading-[27px] leading-[22px]'  >Lynq provides an all-in-one white label solution to manage and offer paid <br/> video-based one-on-ones and masterclasses to your followers.</p>
    <Button label="Get Start for Free"/>
    </div>
 
    <div   className='  '  > <Image src={Mouckupp} alt="Mouckupp"/></div>
     
   
   

      <div className='  flex-col text-center space-y-6 '>
      <h1 className='font-bold md:text-[55px] text-[38px] md:leading-[66px] leading-[38px]  text-[#FFFFFF]' >
     Selling expertise and interaction with your <br/> audience is
      <span  className=" relative before:block before:absolute before:inset-5 before:mt-4 before:py-4    before:bg-[#5A27E7]">
    <span className="relative text-white">  your next big source of revenue</span>
  </span>
     
      </h1>
      <p className='md:font-medium font-normal  md:text-lg text-base text-[#999CA0] leading-[27px] '>Let Lynq helps you launch your own expertise video channel</p>
    <Button label="Launch Your Expertise Channel For Free"/>
    </div>
    </div>
    
  )
}

export default Hero