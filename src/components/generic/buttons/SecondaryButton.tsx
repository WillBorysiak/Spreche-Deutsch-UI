interface SecondaryButtonProps {
  text: string;
  onClick: () => void;
}

const SecondaryButton = (props: SecondaryButtonProps) => {
  const { text, onClick } = props;

  return (
    <button
      type="button"
      className="default-transition rounded-sm bg-orange-500 px-3 py-2 text-lg font-bold shadow-sm hover:scale-105"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
