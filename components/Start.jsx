import React from 'react'
import {Button} from "../components"

const Start = () => {
  return (
    <div className='bg-[#1A1B1C] md:rounded-[30px] mx-0 md:mx-[210px] mb-[50px] text-center py-9 space-y-[40px]   '>
      <h1 className='text-[#FBFF12]  md:text-[34px] text-[30px] font-bold leading-[67px] px-28 text-center min-w-[302px] '>
          <span  className=" relative before:block before:absolute before:inset-5 before:mt-4 before:py-4    before:bg-[#5A27E7]">
    <span className="relative ">  Start monetizing your expertise</span>
  </span>
       </h1>

      <Button label="Get Strat For Free" />

      
    </div>
  )
}

export default Start