'use client'
import React, {useState} from 'react'

import Link from 'next/link';
import OtherServices from "@/components/otherServices";
import { ClockIcon, PersonStandingIcon,  SmileIcon, TruckIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [isCallPopOpen, setIsCallPopOpen] =useState(false)
  const toggleCallPopOpen = ()=>{
    setIsCallPopOpen(!isCallPopOpen)
  }
  return (
       <div className="mt-[47.06px] text-DarkTwo "> 
         <section className=" z-1 h-full">
          <div>
          <div  className="px-4 flex flex-col gap-6 items-start mt-20">
            <h1 className="text-[28px] text-start font-extrabold ">
            May Your New Home Thrive with Joy</h1>
          <p className="font-normal">
          Experience the sacred Gomatha Gruhapravesham, where the blessings of a cow and calf bring peace and prosperity. Invite spiritual harmony into your new home with this cherished tradition.
          </p>
          <button  onClick ={toggleCallPopOpen}className="bg-DarkOne px-4 py-2 text-lightOne text-5 extrabold rounded-lg">Book Now</button>
          </div>
          <Image src="/images/ai/heroimagemain.webp" width={1024} height={1024} className="mt-4" alt="cow for house warming" priority />
          </div>
          {
               isCallPopOpen &&
            <div className="absolute top-0 left-0 right-0 w-full h-full bg-DarkOne grid place-items-center bg-opacity-50 z-1">
              <div className="w-[80%] bg-lightOne h-[20%] rounded-sm 
              flex flex-col justify-center items-center gap-10 "> 
                 <p className="font-semibold text-lg text-center">
                    click here to call Dhanaraj Sastri
                 </p>
                 <div className= "flex gap-10 ">
                  <a href="tel:+919550864964" className="bg-DarkOne text-lightOne px-2 py-1 text-lg font-bold rounded-md "> call Now</a>
                  <Link href="/" className="text-lg border-2 px-2 py-[2px] border-DarkOne rounded-lg" onClick={toggleCallPopOpen}>Cancel</Link>
                 </div>
              </div>
          </div>
            }
         </section>
         <section className="flex flex-col gap-20 mt-12" >
         <div className="px-4 flex flex-col gap-6 items-start">
          <h1 className="text-[28px] text-start font-extrabold">Why us</h1>
          <p className="text-base">We honor the age-old Hindu tradition of Gruhapravesham by bringing the  divine presence of Gomatha (Cow) and her calf into your home. Our service goes beyond ritual, offering a profound spiritual experience with hassle-free transport to ensure timely arrival and a seamless ceremony, allowing you to fully enjoy the blessings and harmony in your new dwelling.</p>
         <p className="italic font-extrabold text-lg text-center">our cows can effortlessly walk up and down stairs!</p>
         </div>
         <Image src="/images/ai/whyusimage.webp" width={1024} height={1024}
         alt="Cow Worship in Housewarming"/>
         </section>
         <OtherServices className="z-0"/>
         <section className="bg-lightTwo py-10 grid place-items-center">
            <div className="w-fit flex flex-col gap-3 items-center">

            <div className="flex border-DarkOne border-2 w-full px-3 py-2 rounded-2xl">
                  <TruckIcon />
                  <p className="text-base ml-4 font-bold">Transportation</p>
            </div>
            <div className="flex border-DarkOne border-2 w-full px-3 py-2 rounded-2xl">
                  <ClockIcon />
                  <p className="text-base ml-4 font-bold">On-Time Arrival</p>
            </div>
            <div className="flex border-DarkOne border-2 w-full px-3 py-2 rounded-2xl">
                  <PersonStandingIcon />
                  <p className="text-base ml-4 font-bold">Staff provided</p>
            </div>
            <div className="flex border-DarkOne border-2 w-fit px-3 py-2 rounded-2xl">
                  <SmileIcon />
                  <p className="text-base ml-4 font-bold">Joyful Celebration</p>
            </div>
            </div>
         </section>
         <section className="my-20">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 p-4">
              <Image src="/images/gallery/image1.jpeg" width="200" height="140" alt="client-1" className=" aspect-square border-2 border-DarkOne w-full"/>
              <Image src="/images/gallery/image2.jpeg" width="200" height="140" alt="client-2" className="aspect-square 
              border-2 border-DarkOne w-full"/>
              <Image src="/images/gallery/image3.jpeg" width="200" height="140" alt="client-3" className="aspect-square 
              border-2 border-DarkOne w-full"/>
              <Image src="/images/gallery/image8.jpeg" width="200" height="140" alt="client-4" className="aspect-square 
              border-2 border-DarkOne w-full"/>
            </div>
            <p className="text-lg font-extrabold italic text-center">
              Our Happy Customers
            </p>
         </section>
         <section className="italic text-base p-4 flex flex-col mb-8 gap-8">
            <div>
              <p className="text-start font-normal">“The presence of the cow and calf during our housewarming was a deeply spiritual experience.We felt an overwhelming sense of peace and joy, and our new home feels truly blessed” </p>
             <p className="text-end mt-2 font-light">~<b>srinivas Rao</b>, vijaywada</p>
            </div>
            <div>
              <p className="text-start font-normal">"Gomatha Gruhapravesham brought a divine energy to our new home. We are grateful  for the beautiful tradition and the excellent service provided."</p>
             <p className="text-end mt-2 font-light">~<b>sailaja Reddy</b>, Guntur</p>
            </div>
            <div>
              <p className="text-start font-normal">"The presence of the cow and calf in ourhome was a profound spiritual experience. We felt peace and joy, and our new home truly feels blessed."</p>
             <p className="text-end mt-2 font-light">~<b>gourav Rana</b>, Nunna</p>
            </div>
         </section>

       </div>
  );
}
