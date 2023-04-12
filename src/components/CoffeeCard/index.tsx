import {
  Button,
  Card,
  CardInfo,
  CardPrice,
  Cart,
  Categories,
  Counter,
} from "./styles";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

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
  function PriceLocaleBr(price: number): string {
    return price.toLocaleString("pt-br", {
      currency: "BRL",
      minimumFractionDigits: 2,
    });
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
          <Counter>
            <button>
              <Minus weight={"bold"} size={14} />
            </button>
            <span>1</span>
            <button>
              <Plus weight={"bold"} size={14} />
            </button>
          </Counter>
          <Link to={"/checkout"}>
            <Button>{<ShoppingCart weight="fill" size={22} />}</Button>
          </Link>
        </Cart>
      </CardPrice>
    </Card>
  );
}
