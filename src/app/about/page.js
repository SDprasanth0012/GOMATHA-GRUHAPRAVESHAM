import Image from "next/image";
export default function About(){
  return (
    <div className="mt-[47.06px] text-DarkTwo ">
       <section className="flex flex-col  gap-20 h-fit">
          <div className="px-4 flex flex-col gap-4 items-start mt-5">
          <h1 className="text-[28px]  w-full text-center font-extrabold ">
          ABOUT US
          </h1>
          <p className="font-normal">
          At Gomatha Gruhapravesham, we bring a sacred and time-honored tradition to your doorstep. Rooted deeply in Hindu culture, our service revolves around the spiritual practice of Gruhapravesham, where the presence of a cow and calf is believed to usher in peace, prosperity, and divine blessings to new homes.
          </p>
          <p className="font-normal">
          Our journey began with a simple belief: that the sacred bond between humans and Gomatha (Mother Cow) holds the power to transform any house into a blessed sanctuary. Over the years, we've dedicated ourselves to ensuring that this tradition is carried out with the utmost reverence and authenticity.
          </p>
          </div>
          <Image src="/images/about/aboutCow.jpeg" width={1024} height={1024} className="mt-4" priority alt="pic of cow and calf"/>
         </section>
         <section>
          <div className="p-4 mt-8">

           <h2 className="font-bold text-start text-2xl">Celebrating Gomatha’s baby shower cermony</h2>
           <p className="text-normal text-start mt-8 text-base">
           In addition to housewarming ceremonies, we also honor and celebrate a unique tradition—the baby shower (Godh Bharai) ceremony for expectant cows. This sacred event, deeply rooted in Hindu beliefs, is held to bless the cow and her upcoming calf, ensuring their health, prosperity, and divine protection. By performing this special ceremony, we celebrate the arrival of new life and express our gratitude for Gomatha’s role in sustaining life and prosperity.
           </p>
          </div>
          <Image src="/images/about/aboutCowFn.jpeg" alt='cow' width="300" height="300" className="w-full"/>
         </section>
         <section className="px-4 mt-8">
            <h3 className="text-xl font-bold mb-4">OUR MISSION</h3>
            <p className="font-normal text-base mb-8">To preserve and promote the sacred traditions of Hindu culture by providing a seamless, spiritual, and deeply enriching experience for every ceremony we are a part of.</p>
            <h3 className="text-xl font-bold mb-4">OUR VISION</h3>
            <p className="font-normal text-base mb-8">To be the trusted partner for families across India, bringing spiritual harmony and blessings into every significant life event, whether for homes or for the revered Gomatha.</p>
         </section>
         <section className="p-4 mb-8">
            <h3 className="text-xl font-bold mb-4">WHY CHOOSE US</h3>
            <ul className="list-disc pl-4">
              <li className="font-normal text-base mb-4 list-disc"> <b>Authenticity</b>: We are dedicated to maintaining the purity of these ancient traditions.</li>
              <li className="font-normal text-base mb-4"> <b>Experience:</b>Years of experience in conducting Gruhapravesham and Godh Bharai ceremonies for cows across various regions.
              </li>
              <li className="font-normal text-base mb-4 "> <b>Professionalism: </b>
              Our team ensures a smooth and respectful ceremony, with every detail meticulously planned.</li>
              <li className="font-normal text-base "> <b>SpiritualIntegrity:</b>
                We believe in the power of tradition and spirituality to bring positivity and prosperity to every life event.</li>
            </ul>
         </section>
    </div>
  );
}

