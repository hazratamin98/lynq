import React from 'react'
import Container from './Container'
import Logo from "../assests/Logo"
import Image from 'next/image'


const Navbar = () => {
  return (
    // <Container>
         
    <div className='bg-black flex py-5 px-28' >
      <div className='flex-1 w-[96.73px] h-[28px]'>
         <Logo/>
      </div>
    
     <div className='text-white flex items-center space-x-6'>
       <h1 className='font-medium text-sm text-[#999CA0]' >Sign In</h1>
       <button className='bg-[#4CC9F0] py-1 px-5 rounded-sm font-semibold text-sm text-center text-black font-'>Sign up</button>
     </div>
    </div>
  
    // </Container>
  
  )
}

export default Navbar