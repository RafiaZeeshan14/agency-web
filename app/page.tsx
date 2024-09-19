import Achievement from "@/components/Achievement";
import Banner from "@/components/Banner";
import Header from "@/components/Common/Header";
import Hero from "@/components/Hero";
import { ReviewCards } from "@/components/ReviewCards";
import Services from "@/components/Services";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <section className="h-full w-full bg-[url('/Box1.png')] bg-no-repeat bg-center bg-gray-900 ">
        <Header />
        <Hero />
        <Banner />
      </section>
      <section className="py-8">
        <Services />
        <Achievement />
        <Work />
        <ReviewCards/>
      </section>
    </>
  );
}
