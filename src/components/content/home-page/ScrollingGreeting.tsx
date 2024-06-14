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

  return (
    <div id="greeting" className="mr-28 flex flex-row sm:mr-44">
      <Greeting text={staticText} />

      <div id="scrolling-greeting" className="relative ml-3">
        <Transition
          show={greeting === dynamicText[0]}
          className="absolute text-green-400 duration-1000 ease-in-out"
          enterFrom="opacity-0 -translate-y-10"
          enterTo="opacity-100 translate-y-0"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-10"
        >
          <Greeting text={dynamicText[0]} />
        </Transition>
        <Transition
          show={greeting === dynamicText[1]}
          className="absolute text-blue-400 duration-1000 ease-in-out"
          enterFrom="opacity-0 -translate-y-10"
          enterTo="opacity-100 translate-y-0"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-10"
        >
          <Greeting text={dynamicText[1]} />
        </Transition>
        <Transition
          show={greeting === dynamicText[2]}
          className="absolute text-orange-400 duration-1000 ease-in-out"
          enterFrom="opacity-0 -translate-y-10"
          enterTo="opacity-100 translate-y-0"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-10"
        >
          <Greeting text={dynamicText[2]} />
        </Transition>
      </div>
    </div>
  );
};

export default ScrollingGreeting;
