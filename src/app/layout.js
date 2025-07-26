import "./globals.css";
import Header from "@/components/global/(header)/Header";
import Footer from "@/components/global/footer";
import PageCounter from "@/components/global/animationer/PageCounter";
import BaggrundSvg from "@/components/global/svg/BaggrundSvg";
import { Roboto_Flex } from "next/font/google";

const roboto = Roboto_Flex({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="da" className={roboto.className}>
      <body>
        <Header />
        <main className="mt-15">
          <BaggrundSvg />
          <PageCounter />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
