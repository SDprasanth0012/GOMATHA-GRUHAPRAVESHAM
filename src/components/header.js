"use client"



import Image from 'next/image'
import MenuIcon from './iconComponents/menuIcon';
import CloseIcon from './iconComponents/closeIcon';
import React, {useState, useRef, useEffect} from 'react'
import Link from 'next/link'
import ArrowDown from './iconComponents/arrowDown';
import ArrowUp from './iconComponents/arrowUp';


const menuLink = [
    {path:'/', label: 'Home'},
    {path:'/about', label: 'About'},
    {path:'/donate', label: 'Donate'},
    {path:'/contact', label: 'Contact'}
]
const service = [
    {path:'/service1', label: 'Nadeswaram',},
    {path:'/service2', label: 'Pandits',},
    {path:'/service3', label: 'Catering',},
    {path:'/service4', label: 'Flower Decoration',}
]
const Header = () => {
     const container = useRef();
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const [isDown, setIsDown] = useState(false);

     const t1 = useRef()

     const  toggleDropdown = ()=>{
        setIsDown(!isDown);
     }
     const toggleMenu = ()=>{
         setIsMenuOpen(!isMenuOpen);
         setIsDown(true)
     }
     

    


  return ( 
    <div className="block" ref={container}>
    {/*main header starts here */}
    <div className="w-full bg-lightOne flex justify-between items-center px-4 fixed top-0 right-0 left-0 z-20">
        <Link href="/">
        <Image src='/images/logo/LIGHT_LOGO.svg' width={128} height={606*128/1648} alt ="logo" className="aspect-auto" />
        </Link>
        <div className="" onClick = {toggleMenu}>
            <MenuIcon />
        </div>
    </div>
    {/* main header ends here*/}
        {/* menu overlya starts here*/}
        {  isMenuOpen &&
           <div className="bg-DarkOne h-screen text-lightOne text-lg fixed
           top-0 right-0 left-0 z-20" id="gsap-menu" >
           {/* Menu header starts here*/}
           <div className="w-full flex justify-between items-center px-4">
             <Link href="/">
               <Image src='/images/logo/DARK_LOGO.svg' width={128} height={24} alt ="logo" className=""  onClick = {toggleMenu}/>
             </Link>
             <div className="" onClick = {toggleMenu}>
               <CloseIcon />
             </div>
           </div>
           {/*Menu header ends here*/}
           {/* navigation lnks start here*/}
           <nav className="flex flex-col gap-4 pl-4 mt-8">
            {
                menuLink.map((link, index) => (
                    <Link key={index} href={link.path} className="gsap-link"
                    onClick = {toggleMenu}>
                        {link.label}
                    </Link>
                ))
            }
            <div className="flex justify-between items-baseline pr-4" onClick = {toggleDropdown}>
               <div>Other Services</div> 
               {isDown ? <ArrowDown className="self-center" /> : <ArrowUp />}
            </div>
            {
                !isDown && <nav className="flex flex-col gap-4 pl-4 ">
                {
                    service.map((link, index) => (
                        <Link key={index} href={link.path} className="gsap-link"
                        onClick = {toggleMenu}>
                            {link.label}
                        </Link>
                    ))
                }
                </nav>
            }
           </nav>
          {/* navigation links end here*/}
           </div>
        }
        {/* menu overlay ends here*/}
    </div>
  ); 
}

export default Header