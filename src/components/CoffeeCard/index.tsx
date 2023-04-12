import { Button, Card, CardInfo, CardPrice, Cart, Categories } from "./styles";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";
import { QuantityInput } from "../QuantityInput";

export interface Coffee {
  id: number;
  categories: string[];
  title: string;
  description: string;
  img: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}
export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1);
  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  function PriceLocaleBr(price: number): string {
    return price.toLocaleString("pt-br", {
      currency: "BRL",
      minimumFractionDigits: 2,
    });
  }

  const { addCoffeeToCart } = useCart();

  function handleAddCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    };
    addCoffeeToCart(coffeeToAdd);
  }

  return (
    <Card>
      <img src={coffee.img} alt="" />
      <Categories>
        {coffee.categories.map((tag) => (
          <span key={tag}>
            <small>{tag}</small>
          </span>
        ))}
      </Categories>
      <CardInfo>
        <h1>{coffee.title}</h1>
        <dd>{coffee.description}</dd>
      </CardInfo>
      <CardPrice>
        <small>
          R$
          <b>{PriceLocaleBr(coffee.price)}</b>
        </small>
        <Cart>
          <QuantityInput
            quantity={quantity}
            onDecrease={handleDecrease}
            onIncrease={handleIncrease}
          />
          <Button onClick={handleAddCart}>
            {<ShoppingCart weight="fill" size={22} />}
          </Button>
        </Cart>
      </CardPrice>
    </Card>
  );
}
