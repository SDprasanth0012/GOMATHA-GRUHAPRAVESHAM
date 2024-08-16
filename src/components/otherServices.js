import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
  } from "@/components/ui/carousel"
import Image from 'next/image'
  
const services = [
    { path: "/images/services/image6.jpeg",  title : "Nadeswaram / sanayi"},
    { path: "/images/services/image12.jpeg", title : "Flower Decoration"},
    { path: "/images/services/image9.jpeg",  title : "Pooja Mandapam"},
    { path: "/images/services/image13.jpeg", title : "Tent House"},
    { path: "/images/services/image14.webp", title : "Pooja Mandapam"},
    { path: "/images/services/image15.jpeg", title : "Catering"},
    { path: "/images/services/image16.jpeg", title : "Pandits / pojaari"},
    { path: "/images/services/image17.jpeg", title : "Homam Basin"}
]

const OtherServices = () => {
  return (
    <section className="mt-20">
        <h2 className="text-center font-extrabold text-3xl mb-5">Other Services</h2>
        <div className="flex flex-row justify-center">
        <Carousel className="w-[224px] max-w-xs">
      <CarouselContent>
        { services.map((service,index)=>{ return (

            <CarouselItem key={index}>
               <div className="p-1">
                 <Card className="w-full bg-lightOne border-0">
                   <CardContent className="flex flex-col aspect-square items-center justify-center p-6 w-full">
                    <div className="flex flex-col justify-between">

                     <Image src={service.path} width="200" height="200" alt={service.title}
                     className="aspect-square rounded-lg"/>
                     <h3 className="text-DarkTwo font-bold text-xl text-center mt-5">{service.title}</h3>
                    </div>
                   </CardContent>
                 </Card>
               </div>
             </CarouselItem>
            );
        })}
      </CarouselContent>
      <CarouselPrevious className="bg-DarkOne text-lightOne
      focus:bg-DarkOne 
      focus:text-lightOne"/>
      <CarouselNext className="bg-DarkOne text-lightOne focus:bg-DarkOne 
      focus:text-lightOne" />
    </Carousel>
        </div>
   

   
    </section>
  )
}

export default OtherServices