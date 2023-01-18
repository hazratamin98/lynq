import React from 'react'
import LiveCall from "../assests/LiveCall"

const Live = () => {
  return (
    <>
    
     <div className='text-center'>
        <h1 className='font-bold text-[48px] leading-[66px] mt-40 text-[#FFFFFF]' >
    1:1 live video calls
      </h1>
      <p className='font-medium text-lg text-[#999CA0] leading-[27px] '>Provide your followers with personalized advice through short live video calls </p>
    </div>
    <div className='flex  justify-between'>
    <LiveCall/>
     {/* <h1 class='before:inline-block before:w-3 before:h-3 before:mr-4
           before:bg-red-500 before:rounded-full '>Hello</h1>
        <div class="h-[40px]  bg-red-400 w-[5px] ml-[3.5px] "></div> */}
        {/* <div className='w-[48px] h-[48px] bg-black rounded-full  border-[#5A27E7] border-solid border-2 text-center  '>1</div> */}
    <div class="flex items-start gap-5">
      <span  className='w-[48px] h-[48px] bg-black rounded-full  font-bold text-2xl text-[#5A27E7] border-[#5A27E7] border-solid border-1  text-center  '>1</span>
      <div>
        <h1 className='font-bold text-[22px] leading-[30px]'>Pick up your schedule</h1>
        <p className='font-normal text-base text-[#999CA0]'>Manage your availability and synchronize your <br/> calendars. Booking happens only when you are free</p>
      </div>
  
  </div> 
  
    </div>
    </>
   
  )
}

export default Live