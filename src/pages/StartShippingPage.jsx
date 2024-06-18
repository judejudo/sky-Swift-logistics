import React from 'react'
import process1 from '../assets/images/process1.png'
import process2 from '../assets/images/process2.png'
import process3 from '../assets/images/process3.png'
import process4 from '../assets/images/process4.png'

export default function StartShippingPage() {
  return (
    <div className=' bg-slate-200  pt-32'>
      <section className='flex flex-col space-y-10 font-fredoka items-center justify-center '>
        <p className='text-6xl text-orange-400 font-semi'>START SHIPPING</p>
        <div className='text-center text-2xl'>
          <p>Whether it's a single envelope or a multi-pallet shipment,, we deliver your</p>
          <p>shipments across the globe. Get your custom quote and shipping plan in</p> 
          <p>minutes. Provide your details below, choose your options, and book with ease.</p> 
          <p>Your cargo our priority</p>
        </div>
        <div className=' space-x-10 ml-32 text-2xl font-semibold text-black relative h-96 w-[1000px]'>
          <div className='flex flex-col'> <img src={process1} alt="process1" className='absolute left-0 top-0' /></div>
          <div className='flex flex-col'> <img src={process2} alt="process1" className='absolute left-[250px] top-[150px]' /> <p> </p> <p></p></div>
          <div className='flex flex-col'> <img src={process3} alt="process1" className='absolute left-[500px] top-0' /> <p></p> <p></p> </div>
          <div className='flex flex-col'> <img src={process4} alt="process1" className='absolute left-[750px] top-[150px]' /> <p></p> <p></p></div>
          <div className='flex flex-col absolute  text-center top-[150px]'>  <p>Enter Origin and</p> <p>Destination</p></div>
          <div className='flex flex-col absolute left-[230px] text-center top-[300px]'>  <p>Describe your</p> <p>Shipment</p></div>
          <div className='flex flex-col absolute left-[470px] text-center top-[150px]'> <p> Get delivery</p> <p>Prices</p></div>
          <div className='flex flex-col absolute left-[750px] text-center top-[300px]'>  <p>Continue</p> <p>To booking</p></div>

          <div className=" absolute left-44 top-20">
            <div className="dashed-line"></div>
          </div>
          <div className=" absolute left-[400px] top-16">
            <div className="dashed-line2"></div>
          </div>
          <div className=" absolute left-[650px] top-[115px]">
            <div className="dashed-line3"></div>
          </div>
        </div>
        
      </section>
      <section>
        <p>This is the shipping page</p>
        <p>This is the shipping page</p>
        <p>This is the shipping page</p>
        <p>This is the shipping page</p>
        <p>This is the shipping page</p>
        <p>This is the shipping page</p>
        <p>This is the shipping page</p>
        <p>This is the shipping page</p>
        <p>This is the shipping page</p>
        <p>This is the shipping page</p>
        <p>This is the shipping page</p>
        <p>This is the shipping page</p>
      </section>
    </div>

  )
}
