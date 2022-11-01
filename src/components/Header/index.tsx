import logo from "../../assets/Logo.svg";
import { HeaderContainer, Info } from "./styles";
import { MapPin } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <Info>
        <a>
          <MapPin size={22} />
          Porto Alegre, RS
        </a>
        <button></button>
      </Info>
    </HeaderContainer>
  );
}
