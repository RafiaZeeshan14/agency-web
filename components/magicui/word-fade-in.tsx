"use client";

import { motion, Variants } from "framer-motion";

import { cn } from "@/lib/utils";

interface WordFadeInProps {
  words: string;
  className?: string;
  delay?: number;
  variants?: Variants;
}

export default function WordFadeIn({
  words,
  delay = 0.15,
  variants = {
    hidden: { opacity: 0 },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    visible: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * delay },
    }),
  },
  className,
}: WordFadeInProps) {
  const _words = words.split(" ");

  return (
    <motion.h1
      variants={variants}
      initial="hidden"
      animate="visible"
      className={cn(
        "text-center  tracking-[-0.02em] ",
        className,
      )}
    >
      {_words.map((word, i) => (
        <motion.span key={word} variants={variants} custom={i}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.h1>
  );
}