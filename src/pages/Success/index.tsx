import { Container, Icon, Info, OrderInfo, Wrapper } from "./styles";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

export function Success() {
  return (
    <>
      <Container>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <Wrapper>
          <OrderInfo>
            <Info>
              <Icon icon="pin">
                <MapPin weight="fill" />
              </Icon>
              <span>
                Entrega em <b> Rua João Daniel Martinelli, 102</b> Farrapos -
                Porto Alegre, RS
              </span>
            </Info>
            <Info>
              <Icon icon="timer">
                <Timer weight="fill" />
              </Icon>
              <span>
                Previsão de entrega
                <b> 20 min - 30 min</b>
              </span>
            </Info>
            <Info>
              <Icon icon="currency">
                <CurrencyDollar weight="fill" />
              </Icon>
              <span>
                Pagamento na entrega
                <b> Cartão de Crédito</b>
              </span>
            </Info>
          </OrderInfo>
          <img src="src/assets/Illustration.svg" alt="" />
        </Wrapper>
      </Container>
    </>
  );
}
