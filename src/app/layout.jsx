import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";
import { Toaster } from "react-hot-toast";
import "../styles/globals.css";
import BackToTop from "@/components/common/forms/BackToTop";

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
        <Toaster toastStyle={{ backgroundColor: "var(--tertiary-color)" }} />
        <BackToTop />
      </body>
    </html>
  );
}
