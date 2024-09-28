// We import components from other files like this
import MyCard from "./components/MyCard";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

// In a `page.js` file, we usually call the page function `Home`
export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Services />
      <Faq />
    </main>
  );
}
