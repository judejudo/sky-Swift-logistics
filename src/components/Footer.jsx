import React from 'react'
import { Link } from 'react-router-dom'
import backgroundImage1  from '../assets/icons/ellipse.png';
import CustomerService1  from '../assets/icons/customerService.png';
import location  from '../assets/icons/location.png';



export default function Footer() {
  return (
    <footer className='font-fredoka flex flex-col pt-10 bg-blue-950 text-white'>
      <div className='flex flex-row space-x-80'>
        <div className='flex flex-col  ml-10 space-y-2' >
        <ul className='flex  font-fredoka '>
            <li className='p-1'><Link to="/" className="text-xl text-orange-400 font-bold">Sky-Swift <span className="block text-xg text-orange-400">Logistics</span></Link></li>
        </ul>
        <p className='text-xl'>The Maralal Oasis</p>
        <p className='text-xl'>8:00AM - 5:00PM</p>
        <div className='flex flex-row space-x-3'>
          <Link to="/" ><img className='h-10' src={require('../assets/icons/facebook.png')} alt="facebook" /></Link> 
          <Link to="/" ><img className='h-10' src={require('../assets/icons/instagram.png')} alt="instagram" /></Link>
          <Link to="/" ><img className='h-10' src={require('../assets/icons/twitter.png')} alt="twitter" /></Link>
        </div>
        </div>
        <div className='flex flex-col' >
          <h1 className='text-2xl font-semibold'>Useful Links</h1>
          <ul className='flex flex-col space-y-2 text-xl'>
            <li><Link to="/">About us</Link></li>
            <li><Link to="/">Contact us</Link></li>
            <li><Link to="/">Our Policy</Link></li>
            <li><Link to="/">Terms and Conditions</Link></li>
            <li><Link to="/">Refunds Claim Form</Link></li>
          </ul>
        </div>
        <div className='flex flex-col' >
        <div className='flex flex-col' >
          <h1 className='text-2xl font-semibold'>Our Services</h1>
          <ul className='flex flex-col space-y-2 text-xl'>
            <li><Link to="/">Make a Shipment</Link></li>
            <li><Link to="/">Tracking</Link></li>
            <li><Link to="/">Get a Quote</Link></li>
          </ul>
        </div>
        </div>
      </div>
      <div className='h- mt-10  border-orange-600 border-dashed border-2 mx-5'>
        <div className='flex flex-row space-x-72 px-5 pt-1 '>
            <div className='flex space-x-2' >
              <div className=" flex items-center justify-center h-14 w-14 mt-4 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage1})` }}> <img src={CustomerService1} alt="customerService" className='w-10' /> </div>
              <div className='flex flex-col'>
                <p className='text-xl font-semi'>Send us an Email </p>       
                <p className='font-thin'>info@sky-swift.com</p>       
      
              </div>       
            </div>  
            <div className='flex space-x-2' >
              <div className=" flex items-center justify-center h-14 w-14 mt-4 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage1})` }}> <img src={CustomerService1} alt="customerService" className='w-10' /> </div>
              <div className='flex flex-col'>
                <p className='text-2xl'>Give us a call</p>       
                <p className='font-thin'>+254733555576</p>       
                <p className='font-thin'>+254733555576</p>       
              </div>       
            </div>  
            <div className='flex space-x-2' >
              <div className=" flex items-center justify-center h-14 w-14 mt-4 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage1})` }}> <img src={location} alt="customerService" className='w-10' /> </div>
              <div className='flex flex-col'>
                <p className='text-2xl'>Visit us at </p>       
                <p className='font-thin'>The Maralal Oasis</p>       
                <p className='font-thin'>Argwings Kodhek Road</p>       
                <p className='font-thin'>Rose Ave, Nairobi</p>       
              </div>       
            </div>  
        </div>
      </div>
    <p className='text-center text-white'>© 2024 Sky-Swift logistics</p>
  </footer>
  )
}
