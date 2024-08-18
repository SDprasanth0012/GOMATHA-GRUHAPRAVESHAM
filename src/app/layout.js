import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

import Footer from "@/components/footer";
import CallIcon from "@/components/callIcon";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
   default : "Gomatha Gruhapravesham",
   template : "%s : Gomatha Gruhapravesham",
  }, 
  description:     "At Gomatha Gruhapravesham, we specialize in providing sacred cows and calves for your housewarming ceremony, ensuring an auspicious and spiritually enriched start to your new home. Our service honors Hindu traditions by delivering Gomatha and her calf to your doorstep, bringing blessings of prosperity, peace, and well-being. Trust us to make your Gruhapravesham truly divine and meaningful.",

  

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
