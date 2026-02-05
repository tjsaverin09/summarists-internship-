import Features from "@/components/features/Features";
import Footer from "@/components/footer/Footer";
import Landing from "@/components/landing/Landing";
import Navbar from "@/components/navbar/Navbar";
import Numbers from "@/components/numbers/Numbers";
import Reviews from "@/components/reviews/Reviews";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar />
    <Landing />
    <Features />
    <Reviews />
    <Numbers />
    <Footer />
    </>
  );
}
