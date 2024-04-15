interface ParagraphProps {
  text: string;
}

const Paragraph = (props: ParagraphProps) => {
  const { text } = props;

  return <p className="text-lg sm:text-xl">{text}</p>;
};

export default Paragraph;
