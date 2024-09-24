import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Clara Insomnia",
    username: "Occupation",
    body: " ⭐⭐⭐ Absolutely fantastic service! The team went above and beyond to meet our needs. The project was delivered on time, and the quality exceeded our expectations. Highly recommend!",
    img: "/Avatar.png",
  },
  {
    name: "John Doe",
    username: "Earth Founder",
    body: "⭐⭐⭐⭐ Great product with an intuitive design. Customer support was responsive and resolved my issues quickly. Minor improvements could be made, but overall a positive experience.",
    img: "/Avatar3.png",
  },
  {
    name: "Alan Runner",
    username: "Developer",
    body: " ⭐⭐⭐⭐⭐ I couldn't be happier with the results! Everything was done professionally and ahead of schedule. This is the go-to team for anyone looking for high-quality work",
    img: "/Avatar2.png",
  },
  {
    name: "Lil Nas",
    username: "Marketing",
    body: "⭐⭐  Overall, Im satisfied with the service. There were some minor hiccups along the way, but the end product works well, and I appreciate the team’s effort.",
    img: "/Avatar4.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-40 w-38 sm:w-96 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-1 md:mt-2 text-sm mb-3 md:mb-0 ">{body}</blockquote>
    </figure>
  );
};

export function ReviewCards() {
  return (
    <div  className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden rounded-lg  bg-background">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  );
}
