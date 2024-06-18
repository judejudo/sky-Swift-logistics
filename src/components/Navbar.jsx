
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isBlurred, setIsBlurred] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) { // Adjust this value based on when you want the blur to start
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed font-luxjost flex z-20 w-full transition-all duration-300 ${isBlurred ? 'backdrop-blur bg-orange-100/50 text-orange' : 'bg-transparent text-white'}`}>
        <ul className='flex  font-fredoka mt-5 ml-10'>
            <li className='p-1'><Link to="/" className="text-xl text-orange-400 font-bold">Sky-Swift <span className="block text-lg text-orange-400">Logistics</span></Link></li>
            <div className='flex flex-row space-x-10  font-semibold ml-48 text-xl mt-4'>
              <li><Link to="/StartShippingPage">Ship</Link></li>
              <li><Link to="/TrackingPage"></Link>Track</li>
              <li><Link to="/CustomerServicePage"></Link>Customer Service</li>
            </div>

        </ul>
    </nav>
  )
}

