import React from 'react'

const Footer = () => {
  return (
    <div className=' flex md:flex-row flex-col-reverse content-center  bg-black    py-5 px-28'>
        <span className= ' flex flex-1 md:justify-start justify-center items-center  font-normal text-sm text-[#999CA0] leading-4 md:mt-0 mt-6 '>© 2021 Lynq. All rights reserved</span>
        <div className='flex md:flex-row flex-col   text-[#999CA0] font-semibold text-base text-center gap-8'>
            <span>Terms & Conditions</span>
             <span>Privacy Policy</span>
              <span> Contact Us</span>
        </div>
    </div>
  )
}

export default Footer