import Banner from "@/components/Banner";
import Header from "@/components/Common/Header";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <>
      <section className="h-full w-full bg-[url('/Box1.png')] bg-no-repeat bg-center bg-gray-900 ">
        <Header />
        <Hero />
        <Banner/>
        
      </section>
    </>
  );
}
