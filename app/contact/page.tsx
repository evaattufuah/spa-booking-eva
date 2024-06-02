"use client";
import dynamic from 'next/dynamic';
import React from 'react';
import { ContactForm } from '@/components/ContactForm';
const Map = dynamic(() => import('@/components/Map'), { ssr: false });
import { FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen">
      <h1 className="text-3xl tracking-wide font-playfair w-2/3 text-center font-bold text-lime-400 italic mx-auto py-8">
        Contact Us
      </h1>
      <div className="grid p-5 grid-cols-1 md:grid-cols-2 gap-4">
        <img
          src="/images/facials-1.jpeg"
          width={500}
          height={500}
          className="min-w-full rounded-full mx-auto"
          alt="Hand massage"
        />
        <div className="text-yellow-400 italic items-center flex justify-center font-playfair">
          <p className="tracking-wide h-fit w-5/6 text-xl">
            Welcome to EvaRich Spa! Whether you&apos;re looking to book a relaxing
            treatment or have questions about our services, we&apos;re here to
            assist you. At the heart of our spa is a commitment to holistic wellness. We understand that beauty is more than skin deep, which is why we focus on creating a harmonious balance between your body, mind, and spirit. Our treatments are crafted to promote relaxation, reduce stress, and enhance your natural beauty, allowing you to reconnect with yourself on a deeper level.
            Reach out to us through any of the following methods:
          </p>
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-r from-sky-700 to-sky-500 py-12">
        <h2 className="text-3xl text-white text-center font-bold py-7">
          Book an Appointment
        </h2>
        <div className="text-white text-center mx-auto w-5/6 md:w-2/3 lg:w-1/2">
          <p className="mb-4">
            <strong>Online Booking:</strong> Use our convenient online booking
            system to schedule your next visit at any time by filling out our
            form.
          </p>
          <p className="mb-4">
            <strong>Email:</strong> For questions about our services, packages, or any special requests, email us at <a href="mailto:attufuahevabensa@gmail.com" className="text-lime-400 underline">attufuahevabensa@gmail.com</a>. We aim to respond within 24 hours.
          </p>
          <p className="mb-4">
            <strong>Service Menu:</strong> Explore our range of services,
            including massages, facials, body treatments, and more. View our
            full service menu on our About page.
          </p>
          <p className="mb-4">
            <strong>Social Media:</strong> Stay connected and updated with our
            latest offers, promotions, and wellness tips.
          </p>
          <div className="flex justify-center mt-6 space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="text-3xl text-blue-600 bg-white rounded-md p-1" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="text-3xl text-blue-600 bg-white rounded-md p-1" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagramSquare className="text-3xl text-pink-600 bg-white rounded-md p-1" />
            </a>
          </div>
          <p className="mt-8">
            <strong>Feedback:</strong> We value your feedback and suggestions. Share your experience with us to help us improve our services. Email us at <a href="mailto:attufuahevabensanaomi@gmail.com" className="text-lime-400 underline">attufuahevabensanaomi@gmail.com</a> or use our feedback form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container max-w-screen-lg mx-auto py-5">
          <div className="w-full mx-auto">
            <ContactForm />
          </div>
          <div className="w-full h-full z-0">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
