import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
      <div className=" fixed w-full z-10 bg-gray-950">
          <div className="text-start justify-start md:flex md:justify-between content-between p-5 container relative">
              <h2 className='text-white mr-7 font-bold text-xl'>EvaRichy <span className='text-green-500'>Spa 🌸</span></h2>
              <div className="cursor-pointer hidden  md:flex gap-3 text-white font-bold">
                  <Link href='/' className="hover:bg-green-500 rounded">Home</Link>
                  <Link href='/about' className="hover:bg-green-500 rounded">About</Link>
                  <Link href='/contact' className="hover:bg-green-500 rounded">Contact Us</Link>
                  
              </div>
          </div>
      </div>
  )
}

export default Navbar