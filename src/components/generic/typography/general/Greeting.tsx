interface GreetingProps {
  text: string;
}

const Greeting = (props: GreetingProps) => {
  const { text } = props;

  return <h3 className="text-5xl sm:text-7xl">{text}</h3>;
};

export default Greeting;
