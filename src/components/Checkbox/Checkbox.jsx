import { useState } from "react";
import { Label, Input, Indicator, ComingSoonIcon } from "./Checkbox.styled";
import { useCheckboxStore } from "../../store/store";

const Checkbox = ({ value, name, checked, id, label, disabled, $isNest }) => {
  const [isChecked, setIsChecked] = useState(checked);
  const increase = useCheckboxStore((state) => state.increase);
  const decrease = useCheckboxStore((state) => state.decrease);

  const handleClick = () => {
    if (isChecked) {
      decrease();
    } else {
      increase();
    }
    setIsChecked(!isChecked);
  };

  return (
    <Label htmlFor={id} disabled={disabled} $isNest={$isNest}>
      {label}
      {disabled && <ComingSoonIcon>Coming Soon</ComingSoonIcon>}
      <Input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        disabled={disabled}
        checked={isChecked}
        onChange={handleClick}
      />
      <Indicator />
    </Label>
  );
};

export default Checkbox;
