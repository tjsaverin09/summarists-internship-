import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import LoginModal from "@/components/LoginModal";
import Navbar from "@/components/Navbar";
import Numbers from "@/components/Numbers";
import Reviews from "@/components/Reviews";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar />
    <LoginModal />
    <Landing />
    <Features />
    <Reviews />
    <Numbers />
    <Footer />
    </>
  );
}
