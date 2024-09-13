import Button from "./Common/Button";

export default function Hero() {
  return (
    <section className="relative h-screen text-white flex flex-col items-center justify-center text-center px-1 sm:px-4">
      {/* Top Small Text */}
      <p className="uppercase tracking-widest text-[10px] min-[400px]:text-xs px-4 mb-4  p-3 bg-white/20 rounded-full">
        <span className="text-white z-10">
          {" "}
          Number One Creative Digital Agency
        </span>
      </p>

      {/* Main Heading */}
      <h1 className="text-[32px] min-[400px]:text-[43px] sm:text-6xl leading-tight mb-4 font-extrabold">
        <span className="bg-gradient-to-r text-[39px] min-[400px]:text-[43px]  font-extrabold sm:text-6xl from-[#38C682] to-[#00796D] text-transparent bg-clip-text">
          Smart Choices
        </span>
        <br />
        For Your Business Growth
      </h1>

      {/* Subheading */}
      <p className="sm:text-lg max-w-2xl mb-8 text-sm  ">
        Were a team of experienced designers, developers, and marketers,
        passionate about delivering exceptional digital solutions.
      </p>

      {/* Contact Us Button */}
      <Button text="Contact Us" showIcon={true} />
    </section>
  );
}
