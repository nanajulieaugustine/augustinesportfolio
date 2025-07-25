import "./globals.css";
import Header from "@/components/global/(header)/Header";
import Footer from "@/components/global/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>
        <Header />
        <main className="mt-15">
          {children}</main>
        <Footer />
      </body>
    </html>
  );
}
