import React from 'react'
import Button from './Button'

const Price = () => {
  return (
    <div className=' text-center bg-[#1A1B1C] mb-11 py-11'>
      <h1 className='font-bold text-5xl leading-[58px] mb-[64px] '>Pricing</h1>
      <div className='flex justify-center gap-8 md:flex-row flex-col md:mx-0 mx-[16px]'>
         <div className='py-6 bg-[#101011] md:px-[50px] px-[50px] rounded-[20px] '>
        <h1 className='font-bold text-[38px]'>Influencers</h1>
        <p className='font-medium text-[18px] tetx-[#FFFFFF]'>No monthly cost <br/>
        10% on transaction</p>

      </div>
       <div className='py-6 bg-[#101011] px-[50px] rounded-[20px]'>
        <h1 className='font-bold text-[38px]'>Enterprise</h1>
     <p  className='font-medium text-[18px]'>Conatct Us</p>

      </div>
      </div>
     
    </div>
  )
}

export default Price