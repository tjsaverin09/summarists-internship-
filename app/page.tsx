import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar />
    <Landing />
    <Features />
    <Reviews />
    <Footer />
    </>
  );
}
