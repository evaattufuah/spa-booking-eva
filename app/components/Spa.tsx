"use client";
import { useState } from 'react';
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { toast, Toaster } from 'react-hot-toast';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Carousel } from '@/components/ui/carousel';
import { CarouselSize } from '@/components/ui/CarouselRapper';
import Link from 'next/link';
import { ContactForm } from '@/components/ContactForm';
import Map from '@/components/Map';

type FormErrors = Partial<FormValues & { appointmentDate: string }>;

const Spa: React.FC = () => {
    const [appointmentDate, setAppointmentDate] = useState<Date | null>(null);

    return (
        <div>
            {/* Navbar Section */}
            <div className="grid pt-17 p-3 grid-cols-2 gap-4">
                <div className='text-white col-span-1 flex flex-col justify-center'>
                    <h1 className='sm:text-2xl md:text-3xl tracking-wide font-playfair w-2/3 text-center font-bold md:text-lime-400 italic'>
                        Discover our luxurious Glow Spa Services and Retreats 🌸
                    </h1>
                    <p className="text-pretty sm:text-l tracking-wide mt-4 w-5/6 md:text-xl">
                        At our spa, we offer a wide range of treatments, from soothing massages and facials to invigorating body wraps, pedicures, manicures, and full-body scrubs. Our skilled therapists will guide you through the art of relaxation, releasing tension with every massage.
                    </p>
                    <Link href="/contact" className="mt-7 w-fit tracking-wide border border-gray-50 transition ease-in-out delay-150 bg-black font-bold shadow-lg shadow-indigo-500/40 p-5 rounded-2xl pr-8 text-center hover:-translate-y-1 hover:scale-110 hover:bg-lime-500 duration-300">
                            Book Now
                        
                    </Link>
                </div>
                <img src="/images/mass.jpg" width={500} height={500} className='col-span-1 min-w-full rounded-full' alt="Massage" />
            </div>

            {/* Stats Section */}
            <div className="bg-black text-xl p-6 flex justify-evenly font-bold text-center">
                <div>
                    <p className='text-white'>5k+</p>
                    <p className='text-white'>Customer Rating</p>
                </div>
                <div>
                    <p className='text-white'>250k+</p>
                    <p className='text-white'>Happy Customers</p>
                </div>
                <div>
                    <p className='text-white'>130+</p>
                    <p className='text-white'>Online Orders</p>
                </div>
            </div>

            {/* Banner Section */}
            <div className="w-full max-w-8xl h-80 bg-cover bg-center contrast-50" style={{ backgroundImage: `url("/images/spa-towel.jpg")` }}>
                <div>
                    <p className='container p-8 ml-12 font-playfair italic md:text-3xl w-full text-white font-bold md:w-2/5 md:text-right md:ml-0 sm:text-2xl md:text-lime-400'>
                        Professional Spa and beauty service. Affordable and Awesome
                    </p>
                    <p className='w-1/2 ml-8 text-xl text-white font-bold text-center'>
                        At EvaRichy Spa, we take pride in our commitment to excellence. Our team of experienced professionals is dedicated to delivering exceptional service and outstanding results with every treatment. Whether you&apos;re seeking relaxation, rejuvenation, or a total transformation, you can trust that you&apos;re in good hands at EvaRichy Spa.
                    </p>
                </div>
            </div>

            {/* About Us Section */}
            <div className="grid p-5 grid-cols-2 gap-4 container">
                <img src="/images/hand.jpeg" width={500} height={500} className='col-span-1 min-w-full rounded-full' alt="Hand massage" />
                <div className='text-white col-span-1'>
                    <h1 className='text-3xl tracking-wide font-playfair w-2/3 text-center font-bold text-lime-400 italic'>About Us</h1>
                    <p className="text-pretty tracking-wide mb-10 mt-4 w-5/6 text-xl">
                        Indulge in a wide range of luxurious spa and beauty treatments designed to pamper you from head to toe. We believe that true beauty begins with inner peace and radiates outward. That&apos;s why we&apos;ve created a space where you can escape the chaos of everyday life and reconnect with yourself on a deeper level. From the moment you step through our doors, you&apos;ll be greeted by our friendly staff and enveloped in an atmosphere of tranquility and serenity.
                    </p>
                    <Link href="/about" className="mt-10 tracking-wide border border-gray-50 transition ease-in-out delay-150 bg-black font-bold shadow-lg shadow-indigo-500/40 p-5 rounded-2xl pr-8 text-center hover:-translate-y-1 hover:scale-110 hover:bg-lime-500 duration-300">
                            Learn More
                        
                    </Link>
                </div>
            </div>

            {/* Services Section */}
            <h1 className="text-2xl py-5 text-white font-bold text-center">Our Services</h1>
            <div className='z-0'>
                <CarouselSize />
            </div>

            {/* Experts Section */}
            <div>
                <h1 className="text-2xl py-5 text-white font-bold text-center">Meet Our Expert</h1>
                <div className="grid grid-cols-4 gap-4 container">
                    <img src="/images/cute-lady.png" width={50} height={50} className='col-span-1 min-w-64 outline outline-offset-2 outline-white rounded-full' alt="Expert 1" />
                    <img src="/images/cute-guy.png" width={50} height={50} className='col-span-1 min-w-64 outline outline-offset-2 outline-blue-500 rounded-full' alt="Expert 2" />
                    <img src="/images/cute-lady1.png" width={50} height={50} className='col-span-1 min-w-64 outline outline-offset-2 outline-green-300 rounded-full' alt="Expert 3" />
                    <img src="/images/black.png" width={50} height={50} className='col-span-1 min-w-64 outline outline-offset-2 outline-white rounded-full' alt="Expert 4" />
                </div>
            </div>

            {/* Booking Section */}
            <div className="booking">
                <h1 className="text-2xl mt-7 text-white py-3 font-bold text-center">Book an Appointment at EvaRichy Spa</h1>
                <p className="py-4 text-lg text-white">Ready to embark on a journey of relaxation and rejuvenation? Booking your spa appointment at EvaRichy Spa is simple and convenient. Follow the steps below to schedule your appointment. Don&apos;t forget to check out our map below to easily locate our spa.</p>

                <div className="grid grid-cols-2 gap-2 container">
                    <div className="w-4/5">
                        <ContactForm />
                    </div>
                    <div className="mb-3 z-0 h-full">
                        <Map />
                    </div>
                </div>
            </div>
            <Toaster position="top-right" />
        </div>
    );
};

export default Spa;
