// ./src/components/layout/hero.tsx
"use client";

import { motion } from "motion/react";
import { LampContainer } from "../ui/lamp"; 
import { Spotlight } from "../ui/spotlight-new";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-slate-950 overflow-hidden flex flex-col items-center justify-center">

      {/* Spotlight Effect */}
      <Spotlight
        translateY={-350}
        width={560}
        height={1380}
        smallWidth={240}
        duration={7}
        xOffset={100}
      />

      {/* Lamp Container */}
      <LampContainer>
        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0.5, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-700 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Illuminate Ideas <br /> With Your Blog
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 text-center text-gray-300 text-lg md:text-xl max-w-2xl"
        >
          Explore amazing stories or start sharing your own insights today.
        </motion.p>

        {/* Hero Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-8 flex gap-4 justify-center"
        >
          <a
            href="#posts"
            className="rounded-lg bg-indigo-600 px-6 py-3 text-lg font-semibold text-white hover:bg-indigo-700 transition"
          >
            View Posts
          </a>
          <a
            href="#create"
            className="rounded-lg border border-indigo-600 px-6 py-3 text-lg font-semibold text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900 transition"
          >
            Write a Post
          </a>
        </motion.div>
      </LampContainer>
    </section>
  );
}
