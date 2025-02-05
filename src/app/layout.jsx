import Header from "@/components/common/header/Header";
import "../styles/globals.css";
import Footer from "@/components/common/footer/Footer";

export const metadata = {
  title: "Home - Marvels",
  description: "Home - Marvels inc.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
