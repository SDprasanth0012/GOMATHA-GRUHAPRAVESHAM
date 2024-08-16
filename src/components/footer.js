import Link from 'next/link'
import React from 'react'
import Phone from './iconComponents/phone'
import MailIcon from './iconComponents/mail'
import Image from 'next/image'

const Footer = () => {
  return (
     <footer className="text-lightOne bg-DarkOne p-4  w-full flex flex-col gap-12">
        <div className="flex flex-col gap-8 mt-8">
            <div className="flex flex-col gap-4">
                <div className="font-extrabold text-base">
                      OUR SERVICES
                </div>
                <div className="flex flex-col gap-2 pl-2 font-normal text-base">
                     <Link href="/service2">  POOJARI / PANDITS</Link>
                     <Link href="/service4">  FLOWER DECORATION </Link>
                     <Link href="/service3">  TENT HOUSE </Link>
                     <Link href="/service1">  NADESWARAM /SANAYI</Link>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="font-extrabold text-base">
                      LINKS
                </div>
                <div className="flex flex-col gap-2 pl-2">
                     <Link href="/contact">  CONTACT</Link>
                     <Link href="about"> ABOUT US </Link>
                     <Link href="donate">   DONATE</Link>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="font-extrabold text-base">
                      CONTACT
                </div>
                <div className="flex flex-col gap-2 pl-2">
                    <div className="flex flex-row gap-2">
                     <Phone />
                     <p>9550864964</p>
                    </div>
                    <div className="flex flex-row gap-2">
                     <MailIcon />
                     <p>dhanaraj@gmail.com</p>
                     </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
             <Image src="/images/logo/DARK_LOGO.svg" alt ="DARK_LOGO" width="128" height="24" />
             <p className="text-base uppercase text-balance bold text-center">
             “May the bLessings of Gomatha 
fill your home with peace,
 prosperity and divin grace” 
             </p>
             <div className="border-t-LightOne border-[1px] w-full opacity-60"></div>
             <div className="opacity-60 text-center text-xs w-full">
                <p>© 2024 gomatha gruhapravesham </p>
                <p>all rights reserved </p>
             </div>
        </div>
     </footer>
  )
}

export default Footer