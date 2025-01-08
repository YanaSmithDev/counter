import { Button } from "./Button";
import { CounterPropsType } from "./Counter";

type ActionPanelPropsType = CounterPropsType;


export const ActionPanel = ({
  increase,
  reset,
  value, isShowText,
  maxValue,
  startValue,
}: ActionPanelPropsType) => {
  return (
    <div className="action-buttons">
      <Button
        title="inc"
        onClickHandler={increase}
        isBtnDisabled={value === maxValue || isShowText}
      />
      <Button
        title="reset"
        onClickHandler={reset}
        isBtnDisabled={value === startValue || isShowText}
      />
    </div>
  );
};
