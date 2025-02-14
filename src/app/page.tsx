"use client";

import type { NextPage } from "next";

import HomeHero from "../components/content/home-page/HomeHero";
import ScrollingGreeting from "../components/content/home-page/ScrollingGreeting";
import { Greetings } from "../types/Greetings.type";

const HomePage: NextPage = () => {
  const dailyGreetings: Greetings = {
    staticText: "Guten",
    dynamicText: ["Morgen", "Tag", "Abend"],
    animationSpeed: 2000,
  };

  return (
    <section
      id="home-page"
      className="flex items-center justify-center lg:h-full"
    >
      <div
        id="home-page-container"
        className="mx-5 my-10 flex flex-col items-center"
      >
        <ScrollingGreeting greetings={dailyGreetings} />
        <HomeHero />
      </div>
    </section>
  );
};

export default HomePage;
