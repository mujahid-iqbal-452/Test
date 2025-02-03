
// import React, {useState}from 'react'

// export default function Navbar() {
//  const [isMeueOpen, setIsMenueOpen] = useState(false);

//  const toggeMenue=()=>{
//     setIsMenueOpen(!isMeueOpen); //false
    
//  }
//  console.log(isMeueOpen);
//     return (
//     <nav className='bg-blue-500 p-3 m-1'>
//       <div className="flex items-center justify-between">
         
//       <div className="text-white text-2xl font-bold">Car Parking System</div>
      
//         <div className="md:hidden "  onClick={toggeMenue}>
//             <button className='text-white'>
//                     <svg
//                     fill='none'
//                     stroke='currentColor'
//                     strokeLinecap='round'
//                     strokeLinejoin='round'
//                     stroke-width ='2'
//                     viewBox='0 0 24 24'
//                     className='w-6 h-6'  >

//                     <path d="M4 6h16M4 12h16M4 18h16"></path>
//                     </svg>
//             </button>
//             </div>
//       <ul className='hidden md:flex space-x-4'>
//         <li><a href='#' className='text-white'> Home </a> </li>
//         <li><a href='#' className='text-white'> About </a> </li>
//         <li><a href='#' className='text-white'> Services </a> </li>
//         <li><a href='#' className='text-white'> Contact Us </a> </li>
//       </ul>
//       </div>  
//        {/*moblie view  */}
//       {isMeueOpen ?(
//           <ul className='flex-col  md:hidden' >
//           <li className='py-2'><a href='#' className='text-white'> Home </a> </li>
//           <li className='py-2'><a href='#' className='text-white '> About </a> </li>
//           <li className='py-2'><a href='#' className='text-white'> Services </a> </li>
//           <li className='py-2'><a href='#' className='text-white'> Contact Us </a> </li>
//         </ul>
//       ): null}
//     </nav>
//   )
// }


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">Parking System</Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">Home</Link>
          <Link to="/about" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">About Us</Link>
          <Link to="/contact" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">Contact Us</Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

           {isMobileMenuOpen ?(
            <div className='flex-col  md:hidden'>
           <ul className='flex-col  md:hidden' >
           <li className='py-2'><Link to="/t" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">Home</Link> </li>
           <li className='py-2'><Link to="/about" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">About Us</Link> </li>
           {/* <li className='py-2'><a href='/Services' className='text-white  hover:bg-blue-700 px-3 py-2 rounded-md'> Services </a> </li> */}
           <li className='py-2'> <Link to="/contact" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">Contact Us</Link>  </li>
           
           {/* <Link to="/contact" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">Contact Us</Link> */}
         </ul>
         </div>
       ): null} 
    </nav>
  );
};

export default Navbar;
