import React, { Children } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Hero from './Hero'
import Live from './Live'
import MasterClass from './MasterClass'
import Messages from './Messages'
import Estimate from './Estimate'
import Price from './Price'
import Start from './Start'

const Layout = ({Children}) => {
 
  return (
    <>

     <Navbar />
        <main >
           <section className='bg-black text-base'>{Children}</section>      
             <Hero/>
    <Live/>
    <MasterClass/>
    <Messages/>
    <Estimate/>
    <Price/>
    <Start/>
    
        </main>
       <Footer />
    {/* <Navbar/> */}
     {/* <div className='max-w-[1280px] my-0 mx-auto p-8 bg-black'>
     
     </div> */}
     {/* <Footer/> */}
    </>
   
  )
}

export default Layout