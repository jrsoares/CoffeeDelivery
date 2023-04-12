import { Counter } from "./styles";
import { Minus, Plus } from "phosphor-react";
interface QuantityInputProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}
export function QuantityInput({
  onIncrease,
  onDecrease,
  quantity,
}: QuantityInputProps) {
  return (
    <Counter>
      <button onClick={onDecrease} disabled={quantity <= 1}>
        <Minus weight={"bold"} size={14} />
      </button>
      <span>{quantity}</span>
      <button onClick={onIncrease}>
        <Plus weight={"bold"} size={14} />
      </button>
    </Counter>
  );
}
