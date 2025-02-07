import { classNames } from "../../../helpers/class-names";

export enum ButtonTypesEnum {
  Primary = "Primary",
  Secondary = "Secondary",
}

interface PrimaryButtonProps {
  text: string;
  buttonType: ButtonTypesEnum;
  onClick: () => void;
}

const HomeButton = (props: PrimaryButtonProps) => {
  const { text, buttonType, onClick } = props;

  const isPrimary = buttonType === ButtonTypesEnum.Primary;

  return (
    <button
      type="button"
      className={classNames(
        isPrimary ? "bg-red-600" : "bg-orange-500",
        "default-transition rounded-sm px-3 py-2 text-lg font-bold shadow-sm hover:scale-105",
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default HomeButton;
