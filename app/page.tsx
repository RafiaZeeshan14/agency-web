import Banner from "@/components/Banner";
import Header from "@/components/Common/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";


export default function Home() {
  return (
    <>
      <section className="h-full w-full bg-[url('/Box1.png')] bg-no-repeat bg-center bg-gray-900 ">
        <Header />
        <Hero />
        <Banner/>
        
      </section>
      <section className="py-8">
      <Services/>
      </section>
    </>
  );
}
