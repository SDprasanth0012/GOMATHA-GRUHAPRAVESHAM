import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

import Footer from "@/components/footer";
import CallIcon from "@/components/callIcon";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
   default : "Gomatha Gruhapravesham",
   template : "%s | Gomatha Gruhapravesham",
  }, 
  description:     "At Gomatha Gruhapravesham, we specialize in providing sacred cows and calves for your housewarming ceremony, ensuring an auspicious and spiritually enriched start to your new home. Our service honors Hindu traditions by delivering Gomatha and her calf to your doorstep, bringing blessings of prosperity, peace, and well-being. Trust us to make your Gruhapravesham truly divine and meaningful.",

  keywords : [
    "Gomatha Gruhapravesham",
    "Housewarming ceremony",
    "Hindu rituals",
    "Sacred cow ceremony",
    "Gruhapravesham service",
    "Traditional housewarming",
    "Cow and calf blessing",
    "Hindu housewarming",
    "Cow for housewarming",
    "Auspicious ceremony",
    "Vedic rituals",
    "Indian traditions",
    "Spiritual housewarming",
    "Gruhapravesham traditions",
    "Hindu customs",
    "Divine blessings",
    "Prosperity ceremony",
    "Gomatha blessings",
    "Cow for puja",
    "Calf for housewarming",
    "Holy cow ceremony",
    "Indian housewarming",
    "Ritual services",
    "Cow and calf delivery",
    "Pooja ceremony",
    "Auspicious housewarming",
    "Hindu home blessings",
    "Sacred rituals",
    "Traditional puja",
    "Cow puja service",
    "Spiritual ceremony",
    "House blessing",
    "Hindu house rituals",
    "Cows for Gruhapravesham",
    "Hindu home rituals",
    "Vastu Shastra ceremony",
    "Vedic housewarming",
    "Gruhapravesha cow",
    "Gruhapravesham cow service",
    "Indian home rituals",
    "Cow and calf service",
    "Hindu house ceremony",
    "Auspicious home rituals",
    "Cow puja ceremony",
    "Ritual cow blessing",
    "Traditional Hindu rituals",
    "Housewarming blessings",
    "Hindu home puja",
    "Gomatha service",
    "Holy cow blessing",
    "Indian house ceremony",
    "Gruhapravesham traditions",
    "Cow and calf rituals",
    "Spiritual house blessings",
    "Vedic traditions",
    "Housewarming puja",
    "Hindu tradition service",
    "Sacred housewarming",
    "Traditional Indian ceremony",
    "Vastu housewarming",
    "Hindu ritual service",
    "Holy cow ritual",
    "Indian home puja",
    "Vedic house rituals",
    "Divine housewarming",
    "Prosperity puja",
    "Cow and calf delivery service",
    "Auspicious Gruhapravesham",
    "Housewarming ritual service",
    "Hindu spiritual ceremony",
    "Traditional Indian rituals",
    "Vedic house blessings",
    "House blessing service",
    "Hindu home blessing",
    "Sacred cow Gruhapravesham",
    "Calf blessing ceremony",
    "Vedic housewarming service",
    "Indian tradition housewarming",
    "Rituals for new home",
    "Traditional Gruhapravesham",
    "Gomatha puja",
    "Cow delivery for housewarming",
    "Indian home ceremony",
    "Spiritual puja service",
    "Hindu cow blessing",
    "Auspicious home ceremony",
    "Traditional Hindu housewarming",
    "Vedic home blessings",
    "Gomatha for housewarming",
    "Hindu home blessing ceremony",
    "Cow blessing service",
    "Indian housewarming traditions",
    "Rituals for new house",
    "Sacred home rituals",
    "Traditional home blessing",
    "Housewarming ritual service",
    "Hindu home ritual service",
    "Cow and calf delivery for puja",
    "Auspicious Hindu ceremony",
    "Vedic home ceremony"
  ],
  

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-[500px] mx-auto">

        <Header className="max-w-[500px]"/>
        {children}
        <CallIcon />
        <Footer />
        </div>
      </body>
    </html>
  );
}
