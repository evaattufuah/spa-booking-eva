import React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
const Carosuel_about = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    return (
        <Carousel
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full mt-7 max-w-6xl z-1 mx-auto"
        >
            <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="inline-block mr-4">
                        <Image src="/images/facial-4.jpg" width={500} height={500} className="w-full rounded hover:scale-105 ease-in-out duration-300" alt="Facials" />
                        <p className="text-xl text-white font-bold text-center">Facials</p>
                    </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="inline-block mr-4">
                        <img src="/images/pedicure.jpg" width={470} height={500} className="w-full rounded hover:scale-105 ease-in-out duration-300" alt="Pedicure" />
                        <p className="text-xl text-white font-bold text-center">Pedicure</p>
                    </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="inline-block mr-4">
                        <img src="/images/joy.jpg" width={500} height={500} className="w-full rounded hover:scale-105 ease-in-out duration-300" alt="Massage" />
                        <p className="text-xl text-white font-bold text-center">Massage</p>
                    </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="inline-block mr-4">
                        <img src="/images/lash-extendsion.jpg" width={500} height={500} className="w-full rounded hover:scale-105 ease-in-out duration-300" alt="Lash Extensions" />
                        <p className="text-xl text-white font-bold text-center">Lash Extensions</p>
                    </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="inline-block mr-4">
                        <img src="/images/washing-hair.jpg" width={500} height={500} className="w-full rounded  hover:scale-105 ease-in-out duration-300" alt="Hair Washing" />
                        <p className="text-xl text-white font-bold text-center">Hair Washing</p>
                    </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="inline-block mr-4">
                        <img src="/images/barber.jpg" width={500} height={500} className="w-full rounded  hover:scale-105 ease-in-out duration-300" alt="Barber" />
                        <p className="text-xl text-white font-bold text-center">Barber</p>
                    </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="inline-block mr-4">
                        <img src="/images/scrub.jpg" width={500} height={500} className="w-full rounded  hover:scale-105 ease-in-out duration-300" alt="Body Exfoliation" />
                        <p className="text-xl text-white font-bold text-center">Body Exfoliation</p>
                    </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="inline-block mr-4">
                        <img src="/images/washing-hair.jpg" width={500} height={500} className="w-full rounded  hover:scale-105 ease-in-out duration-300" alt="Hair Washing" />
                        <p className="text-xl text-white font-bold text-center">Hair Washing</p>
                    </div>
                </CarouselItem>


            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default Carosuel_about