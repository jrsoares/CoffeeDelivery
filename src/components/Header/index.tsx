import logo from "../../assets/Logo.svg";
import { Button, HeaderContainer, Info } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { cartQuantity } = useCart();
  return (
    <HeaderContainer>
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>
      <Info>
        <div>
          <MapPin weight="fill" size={22} />
          Porto Velho, RO
        </div>
        <Link to={"/checkout"}>
          <Button>
            {<ShoppingCart weight="fill" size={22} />}
            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
          </Button>
        </Link>
      </Info>
    </HeaderContainer>
  );
}
