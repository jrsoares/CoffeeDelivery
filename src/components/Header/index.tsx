import logo from "../../assets/Logo.svg";
import { HeaderContainer, Info } from "./styles";
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
        <button>{<ShoppingCart weight="fill" size={22} />}</button>
      </Info>
    </HeaderContainer>
  );
}
