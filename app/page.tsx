import Achievement from "@/components/Achievement";
import Banner from "@/components/Banner";
import Header from "@/components/Common/Header";
import { CompaniesMarquee } from "@/components/Companies";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { ReviewCards } from "@/components/ReviewCards";
import Services from "@/components/Services";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <section className="min-h-[90vh] flex flex-col justify-between w-full bg-[url('/Box1.png')] bg-no-repeat bg-center bg-gray-900 ">
        <Header />
        <Hero />
        <Banner />
    
      </section>
      <section className="">
        <Services />
        <CompaniesMarquee/>
        <Work />
        <Achievement />
       
        <ReviewCards/>

        <Footer/>
      </section>
    </>
  );
}
