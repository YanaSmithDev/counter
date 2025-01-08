
type ButtonPropsType = {
  title: string;
  onClickHandler: () => void;
  isBtnDisabled: boolean;
};

export const Button = ({
  title,
  onClickHandler,
  isBtnDisabled,
}: ButtonPropsType) => {
  return (
    <button
      className="button"
      onClick={onClickHandler}
      disabled={isBtnDisabled}
    >
      {title}
    </button>
  );
};
