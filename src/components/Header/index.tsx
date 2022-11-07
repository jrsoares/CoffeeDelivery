import logo from "../../assets/Logo.svg";
import { Button, HeaderContainer, Info } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
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
