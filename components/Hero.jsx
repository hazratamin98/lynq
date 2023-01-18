import React from 'react'
import {Button} from "../components"
import LiveCall from "../assests/LiveCall"

const Hero = () => {
  return (
    <>
    <div className='  flex-col text-center space-y-6 '>
      <h1 className='font-bold text-[55px] leading-[66px] center mt-40 text-[#FFFFFF]' >
       Your own video platform to <br/> monetize your expertise
      </h1>
      <p className='font-medium text-lg text-[#999CA0] leading-[27px] '  >Lynq provides an all-in-one white label solution to manage and offer paid <br/> video-based one-on-ones and masterclasses to your followers.</p>
    <Button label="Get Start for Free"/>
    </div>


     <LiveCall/>

      <div className='  flex-col text-center space-y-6 '>
      <h1 className='font-bold text-[38px] leading-[66px] mt-40 text-[#FFFFFF]' >
     Selling expertise and interaction with your <br/> audience is your next big source of revenue
      </h1>
      <p className='font-medium text-lg text-[#999CA0] leading-[27px] '>Let Lynq helps you launch your own expertise video channel</p>
    <Button label="Launch Your Expertise Channel For Free"/>
    </div>
    </>
    
  )
}

export default Hero