import { useEffect, useState } from "react";

import { Transition } from "@headlessui/react";

import { Greetings } from "../../../types/Greetings.type";
import Greeting from "../../generic/typography/general/Greeting";

interface ScrollingGreetingProps {
  greetings: Greetings;
}

const ScrollingGreeting = (props: ScrollingGreetingProps) => {
  const {
    greetings: { staticText, dynamicText, animationSpeed },
  } = props;

  const [greeting, setGreeting] = useState(dynamicText[0]);
  const [count, setCount] = useState(0);

  // infinite counter
  useEffect(() => {
    const interval = setInterval(
      () => setCount((count) => (count + 1) % 3),
      animationSpeed,
    );
    return () => clearInterval(interval);
  }, [animationSpeed]);

  // changes greeting
  useEffect(() => {
    setGreeting(dynamicText[count]);
  }, [count, dynamicText]);

  const colours = ["#34D399", "#60A5FA", "#FB923C"];

  return (
    <div id="greeting" className="mr-28 flex flex-row sm:mr-44">
      <Greeting text={staticText} />

      <div id="scrolling-greeting" className="relative ml-3">
        {dynamicText.map((text, index) => (
          <Transition
            key={index}
            show={greeting === text}
            enterFrom="opacity-0 -translate-y-10"
            enterTo="opacity-100 translate-y-0"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-10"
          >
            <span className="absolute duration-1000 ease-in-out">
              <h3
                className="text-5xl sm:text-7xl"
                style={{ color: colours[index] }}
              >
                {text}
              </h3>
            </span>
          </Transition>
        ))}
      </div>
    </div>
  );
};

export default ScrollingGreeting;
