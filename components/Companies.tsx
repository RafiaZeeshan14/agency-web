import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const Images = [
  {
    img: "/Frame.png",
  },
  {
    img: "/Frame1.png",
  },
  {
    img: "/Frame2.png",
  },
  {
    img: "/Frame3.png",
  },
  {
    img: "/Frame4.png",
  },
  {
    img: "/Frame5.png",
  },
  {
    img: "/Frame6.png",
  },
  {
    img: "/Frame7.png",
  },
  {
    img: "/Frame8.png",
  },
  {
    img: "/Frame9.png",
  },
  {
    img: "/Frame10.png",
  },
  {
    img: "/Frame11.png",
  },
];

const firstRow = Images.slice(0, Images.length / 2);
const secondRow = Images.slice(Images.length / 2);

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // Dark styles
        "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" alt="Review Image" src={img} />
      </div>
    </figure>
  );
};

export function CompaniesMarquee() {
  return (
    <div className="relative flex h-[500px] w-full flex-col bg-gradient-to-r from-[#38C682]/[0.6] to-[#00796D]/[0.9] items-center justify-center overflow-hidden rounded-lg border md:shadow-xl">
      <div className="max-w-6xl flex flex-col md:flex-row justify-between items-center text-white rounded-xl shadow-lg mb-8">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Trusted by 200+ companies
            <br /> around the world.
          </h2>
        </div>
        <p className="text-white text-sm">
          Vulputate molestie molestie amet leo blandit accumsan.
          <br />
          Sapien sed amet tellus purus sit odio eget.
          <br />
          Diam morbi faucibus vitae neque id in. Nullam sed et dapibus nunc,
          porta enim orci urna, sit. Lectus ac.
        </p>
      </div>

      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((Image, index) => (
          <ReviewCard key={index} {...Image} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((Image, index) => (
          <ReviewCard key={index} {...Image} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 from-background"></div>
    </div>
  );
}
