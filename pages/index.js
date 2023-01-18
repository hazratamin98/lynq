import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import {Navbar , Hero , Live , MasterClass , Messages , Estimate , Price , Start , Footer , Layout , Container} from "../components"



export default function Home() {
  return (
    <>
    <div className='bg-black text-white'>
       {/* <Container> */}
        <Navbar/>
    <Hero/>
    <Live/>
    <MasterClass/>
    <Messages/>
    <Estimate/>
    <Price/>
    <Start/>
    <Footer/> 
      {/* </Container> */}
    </div>
     
       
  
    </>
  )
}
