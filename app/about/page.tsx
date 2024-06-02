"use client";
import React from 'react'
import { ContactForm } from '@/components/ContactForm';
import Autoplay from 'embla-carousel-autoplay';
import Map from '@/components/Map';
import Carosuel_about from '@/components/Slider/Carosuel_about';
const AboutPage = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div className="bg-gradient-to-r from-slate-900 to-indigo-900 min-h-screen">
    <div className="grid p-5 grid-cols-2 gap-4 ">
      <img src="/images/wallpaper.jpg" width={500} height={500} className='col-span-1 min-w-full rounded-full' alt="Hand massage" />
      <div className='text-white col-span-1'>
        <h1 className='text-3xl tracking-wide font-playfair w-2/3 text-center font-bold text-lime-400 italic'>About Us</h1>
          <p className="text-pretty tracking-wide mt-4 w-5/6 text-xl">  Indulge in a wide range of luxurious spa and beauty treatments designed to pamper you from head to toe,We believe that true beauty begins with inner peace and radiates outward. That is why we&apos;ve created a space where you can escape the chaos of everyday life and reconnect with yourself on a deeper level. From the moment you step through our doors, you will be greeted by our friendly staff and enveloped in an atmosphere of tranquility and serenity.
          Our spa is designed to be a haven of peace, with calming decor, soothing aromas, and a serene atmosphere that immediately sets you at ease. Whether you are here for a quick beauty treatment or a full day of pampering, you willl find our spa to be a perfect retreat from the hustle and bustle of everyday life.<br></br>

        

        {/* <span className='text-3xl tracking-wide font-playfair w-2/3 text-center font-bold text-lime-400 italic'> Our Services<br></br></span>
          We offer an extensive menu of services tailored to meet your individual needs. Our treatments include:

          Massage Therapy: Choose from a variety of techniques, including Swedish, deep tissue, and hot stone, each designed to relieve tension and promote relaxation.
          Facial Treatments: Our customized facials use the finest products to nourish your skin, leaving it radiant and rejuvenated.
          Body Treatments: Indulge in our luxurious body scrubs and wraps that exfoliate and hydrate your skin, giving you a healthy, glowing complexion.
          Manicures and Pedicures: Pamper your hands and feet with our expertly delivered nail care services.
          Hair and Makeup Services: Our skilled stylists and makeup artists will help you look and feel your best for any occasion.
          Our Commitment to Excellence
          We are dedicated to providing the highest standard of service to our clients. Our team of experienced and licensed professionals continually update their skills and knowledge to offer you the latest in spa and beauty treatments. We use only premium products that are both effective and gentle on your skin, ensuring you receive the best care possible.

          Join Us
          We invite you to step into our world of luxury and relaxation. Let us help you escape the chaos of everyday life and find a moment of peace and serenity. Whether you're looking to unwind after a long day or treat yourself to a special indulgence, our spa is the perfect place to begin your journey to inner and outer beauty.

          Rediscover your inner glow and let your true beauty shine. We look forward to welcoming you to our spa, where your well-being is our highest priority. */}
</p>
      </div>
      </div>

      <div className="min-h-screen min-w-full bg-gradient-to-r from-sky-700 justify-center flex items-center ">
     <Carosuel_about />
      </div>
      <div className="grid grid-cols-2 gap-2 container">
        <div className="w-4/5">
          <ContactForm />
        </div>
        <div className=" mb-6 z-0 h-full">
          <Map />
        </div>
      </div>
     
    </div>
  )
}

export default AboutPage