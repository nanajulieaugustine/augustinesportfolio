import "./globals.css";
import Header from "@/components/global/(header)/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
