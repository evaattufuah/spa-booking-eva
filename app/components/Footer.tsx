import React from 'react';
import { FaPhone } from 'react-icons/fa'; // Import the specific icon
import { FaFacebook, FaTwitter,FaInstagramSquare } from "react-icons/fa";
import Link from 'next/link';
const Footer = () => {
    return (
        <div className='bg-black'>
            <div className='  text-white flex justify-evenly h-64'>
                <div className="py-4">
                    <p className='text-xl font-bold'>About Us</p>
                    <p className='text-l w-60'>Our spa offers a variety of treatments tailored to meet your unique needs. Experience the healing power of our signature massages, designed to melt away stress and tension, leaving you feeling relaxed and rejuvenated.</p>
                </div>
                <div className="py-3 flex flex-col">
                    <p className='text-xl font-bold'>Quick Links</p>
                   
                    <Link href='/' className="hover:bg-green-500 rounded">Home</Link>
                    <Link href='/about' className="hover:bg-green-500 rounded">About</Link>
                    <Link href='/contact' className="hover:bg-green-500 rounded">Contact Us</Link>
                </div>
                <div className="py-4">
                    <p className='text-xl font-bold'>Contact Info</p>
                    <div className='flex items-center mt-2'>
                        <p>080566777773</p>
                        <FaPhone className='mr-2' />   
                    </div>
                    <p>www.EvaRichySpa.com</p>
                </div>
                <div className="py-4">
                    <p className='text-xl font-bold'>Business Hours</p>
                    <p>Monday-Saturday: 9am-8pm</p>
                    <p>Sunday: 11am-8pm</p>
                  
                    <div className="flex justify-left text-center hover:cursor-pointer mt-6 space-x-4">
                        <a href="https://facebook.com">
                            <FaFacebook className="text-3xl text-blue-600 bg-white rounded-md " />
                        </a>
                        <a href="https://twitter.com">
                            <FaTwitter className="text-3xl text-blue-600 bg-white rounded-md " />
                        </a>
                        <a href="https://instagram.com" >
                            <FaInstagramSquare className="text-3xl text-pink-600 bg-white rounded-md " />
                        </a>
                    </div>
                </div>
                
            </div>
            <h2 className='text-white text-center font-bold text-xl'>EvaRichy <span className='text-green-500'>Spa 🌸</span></h2>
        </div>
    );
}

export default Footer;
