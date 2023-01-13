import React, { Children } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({Children}) => {
 
  return (
    <>
     <div className='max-w-[1280px] my-0 mx-auto p-8'>{Children}</div>
    </>
   
  )
}

export default Layout