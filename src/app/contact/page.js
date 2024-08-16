import Image from "next/image";

export default function Contact () {
  return (
    <main className="mt-[47.06px] text-DarkTwo " >
        <section >
          
          <Image src='/images/contact/image11.jpeg' width="200" height="200"className="aspect-video w-full"/>
          <Image src='/images/contact/avatar.jpeg' width="200" height="200" className="aspect-square border-2 z-10 border-amber-950 rounded-full mx-auto -mt-[25%]"/>
          <h3 className="font-bold text-xl text-center mt-5 ">DHANRAJ SASTRI</h3>

          <p className="font-normal text-center"><b>Mob : </b>9550864964</p>
          <p className = "font-normal text-start mt-8 p-4">Coordinated and executed the transport of cows and calves for housewarming ceremonies over the past 13 years, ensuring adherence to cultural traditions and optimal animal care. Managed all transportation aspects efficiently and provided exceptional service for each event.</p>
          <Image src="/images/contact/contactPost.jpeg" width="300" height="600" alt="avu gruhapravesham" className="mx-auto my-8" />
        </section>
    </main>
  )
}

