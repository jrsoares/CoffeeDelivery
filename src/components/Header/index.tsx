import logo from "../../assets/Logo.svg";
import { Button, HeaderContainer, Info } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>
      <Info>
        <a>
          <MapPin weight="fill" size={22} />
          Porto Velho, RO
        </a>
        <Button>
          {<ShoppingCart weight="fill" size={22} />}

          <span>3</span>
        </Button>
      </Info>
    </HeaderContainer>
  );
}
