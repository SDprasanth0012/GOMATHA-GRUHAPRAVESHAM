import {PhoneCallIcon} from "lucide-react"

const CallIcon = () => {
  return (
    <section>
    <a className="fixed bottom-10 right-2 z-15" href="tel:+919550864964">
    <PhoneCallIcon className="w-[70px] h-[70px] border-[2px] border-lightOne bg-DarkOne text-lightOne p-2 text-sm rounded-3xl"/>
    </a>
   </section>
  )
}

export default CallIcon