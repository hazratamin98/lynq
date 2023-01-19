import React from 'react'
import Arrows from "../assests/Arrow"
import Forms from "../assests/Form"

const Estimate = () => {
  return (
    <div className='md:flex py-8 text-center  items-center  '>
      <div className='space-y-[32px]'>
        <h1 className='font-bold text-[40px]'>Estimate how much you <br/> can generate</h1>
        <p className='font-medium text-[18px] leading-7 text-[#999CA0]'>This estimation is based on the average session price, engagement <br/> rate and average number of sessions seen with our existing clients.</p>
        <div className='md:flex gap-4 text-center'>
        <p className='font-medium text-[18px] leading-7 text-[#999CA0]'>This tool should be used as a guide only. These figures <br/> are an estimate and do not guarantee earnings.</p>
          <Arrows/>
        </div>
       
      </div>
       <Forms/>
    </div>
  )
}

export default Estimate